import PropTypes from "prop-types";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { map } from "lodash";
import {
  Badge,
  Card,
  CardBody,
  Col,
  UncontrolledTooltip,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  ButtonDropdown,
} from "reactstrap";
import images from "assets/images";
import companies from "assets/images/companies";

    const EditDropdown = () => {
    const [btnWarning1, setBtnWarning1] = useState(false)
        return (
            <Dropdown
            isOpen={btnWarning1}
            toggle={() => setBtnWarning1(!btnWarning1)}
          >
            <DropdownToggle tag="button" className="btn btn-light position-relative p-0 avatar-xs rounded-circle">
            <span className="avatar-title bg-transparent text-reset"><i className="bx bx-menu"></i></span>
            </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Edit</DropdownItem>
                        <DropdownItem>Delete</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
        )
    }
const CardProject = ({ projects }) => {

  return (
    <React.Fragment>
      {map(projects, (project, key) => (
        <Col xl="3" sm="3" key={key}>
          <Card>
            <CardBody>
                <div className="">
                <EditDropdown />
                </div>
              <div className="text-center">
                    <img src={companies[project.img]} alt="" height="60" className="mb-2 mx-auto avatar-md rounded-circle avatar-md card-img" />
  

                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="text-truncate font-size-15">
                    <Link
                      to={`/projects-overview/${project.id}`}
                      className="text-dark"
                    >
                      {project.name}
                    </Link>
                  </h5>
                  <p className="text-muted mb-4">{project.description}</p>
                </div>
              </div>
            </CardBody>
            <div className="px-4 py-3 border-top">
              <ul className="list-inline mb-0">
                <li className="list-inline-item me-3">
                  <Badge className={"bg-" + project.color}>
                    {project.status}
                  </Badge>
                </li>
                <li className="list-inline-item me-3" id="dueDate">
                  <i className="bx bx-calendar me-1" /> {project.dueDate}
                  <UncontrolledTooltip placement="top" target="dueDate">
                    Due Date
                  </UncontrolledTooltip>
                </li>
              </ul>
            </div>
          </Card>
        </Col>
      ))}
    </React.Fragment>
  );
};

CardProject.propTypes = {
  projects: PropTypes.array,
};

export default CardProject;
