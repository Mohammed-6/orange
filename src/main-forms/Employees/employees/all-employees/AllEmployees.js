import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import {
  Col,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row, BreadcrumbItem
} from "reactstrap";
import { withRouter } from "react-router-dom";
import { map } from "lodash";
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";

//Import Cards
import CardProject from "./card-project";

import { getProjects as onGetProjects } from "store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

const AllEmployees = props => {
  const dispatch = useDispatch();

  const { projects } = useSelector(state => ({
    projects: state.projects.projects,
  }));

  const [page, setPage] = useState(1);
  const [totalPage] = useState(5);

  useEffect(() => {
    dispatch(onGetProjects());
  }, [dispatch]);

  const handlePageClick = page => {
    setPage(page);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Projects Grid | Skote - React Admin & Dashboard Template
          </title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Row>
      <Col xs="12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <div className="">
          <h4 className="mb-0 font-size-18">{"All Employees"}</h4>
            <ol className="breadcrumb m-0">
              <BreadcrumbItem>
                <Link to="#">Employees</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to="#">Employees</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                <Link to="#">All Employees</Link>
              </BreadcrumbItem>
            </ol>
          </div>
          <div className="">
          <button type="button" className="btn btn-primary position-relative p-0 avatar-xs rounded"><span className="avatar-title bg-transparent"><i className="fas fa-th"></i></span></button>&nbsp;&nbsp;
          <button type="button" className="btn btn-primary position-relative p-0 avatar-xs rounded"><span className="avatar-title bg-transparent"><i className="fas fa-bars"></i></span></button>&nbsp;&nbsp;
          <Link to="/employees/employees/add-employee" className="btn-rounded  btn btn-danger"><i className="fa fa-plus"></i>&nbsp;&nbsp;Add Employee</Link>
          </div>
        </div>
      </Col>
    </Row>

    <Row className="mb-4">
        <div className="col-md-3">
            <input type="text" className="form-control" placeholder="Employee ID" />
        </div>
        
        <div className="col-md-3">
            <input type="text" className="form-control" placeholder="Employee Name" />
        </div>
        
        <div className="col-md-3">
            <select className="form-control">
                <option>Select Designation</option>
            </select>
        </div>
        
        <div className="col-md-3">
            <input type="button" className="btn btn-rounded btn-warning btn-block w-100" value="Search" />
        </div>
          </Row>
          <Row>
            {/* Import Cards */}
            <CardProject projects={projects} />
          </Row>

          <Row>
            <Col lg="12">
              <Pagination className="pagination pagination-rounded justify-content-end mb-2">
                <PaginationItem disabled={page === 1}>
                  <PaginationLink
                    previous
                    href="#"
                    onClick={() => handlePageClick(page - 1)}
                  />
                </PaginationItem>
                {map(Array(totalPage), (item, i) => (
                  <PaginationItem active={i + 1 === page} key={i}>
                    <PaginationLink
                      onClick={() => handlePageClick(i + 1)}
                      href="#"
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem disabled={page === totalPage}>
                  <PaginationLink
                    next
                    href="#"
                    onClick={() => handlePageClick(page + 1)}
                  />
                </PaginationItem>
              </Pagination>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(AllEmployees);
