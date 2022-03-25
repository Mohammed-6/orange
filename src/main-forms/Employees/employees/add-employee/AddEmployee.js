import React, { useState } from "react"
import MetaTags from "react-meta-tags"
import { Link } from "react-router-dom"
import Dropzone from "react-dropzone"
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  BreadcrumbItem,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap"

//Import Date Picker
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const AddEmployee = () => {
  const [startDate, setstartDate] = useState(new Date())
  const [endDate, setendDate] = useState(new Date())
  const [selectedFiles, setselectedFiles] = useState([])

  const startDateChange = date => {
    setstartDate(date)
  }

  const endDateChange = date => {
    setendDate(date)
  }

  function handleAcceptedFiles(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    )

    setselectedFiles(files)
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Create New Projects | Skote - React Admin & Dashboard Template
          </title>
        </MetaTags>
        <Container fluid>
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
                  <BreadcrumbItem>
                    <Link to="#">All Employees</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>
                    <Link to="#">Add Employees</Link>
                  </BreadcrumbItem>
                </ol>
              </div>
              <div className="">
                <Link
                  to="/employees/employees/all-employees"
                  className="btn-rounded  btn btn-danger"
                >
                  All Employee
                </Link>
              </div>
            </div>
          </Col>

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Create New Project</CardTitle>
                  <Form>
                    <Row>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            First Name <span className="text-danger">*</span>
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            Last Name <span className="text-danger"></span>
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            Username <span className="text-danger">*</span>
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            Profile
                          </label>
                          <input className="form-control" type="file" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            Email <span className="text-danger">*</span>
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            Password <span className="text-danger">*</span>
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            Confirm Password{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            Employee ID <span className="text-danger">*</span>
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            Joining Date <span className="text-danger">*</span>
                          </label>
                          <input className="form-control" type="date" />
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            Phone <span className="text-danger">*</span>
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            Company <span className="text-danger">*</span>
                          </label>
                          <select className="form-control">
                            <option>Select Company</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            Department <span className="text-danger">*</span>
                          </label>
                          <select className="form-control">
                            <option>Select Department</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            Designation <span className="text-danger">*</span>
                          </label>
                          <select className="form-control">
                            <option>Select Designation</option>
                          </select>
                        </div>
                      </div>
                    </Row>
                    <div className="table-responsive m-t-15"><table className="table table-striped custom-table"><thead><tr><th>Module Permission</th><th className="text-center">Read</th><th className="text-center">Write</th><th className="text-center">Create</th><th className="text-center">Delete</th><th className="text-center">Import</th><th className="text-center">Export</th></tr></thead><tbody><tr><td>Holidays</td><td className="text-center"><input type="checkbox" checked="" /></td><td className="text-center"><input type="checkbox" /></td><td className="text-center"><input type="checkbox" /></td><td className="text-center"><input type="checkbox" /></td><td className="text-center"><input type="checkbox" /></td><td className="text-center"><input type="checkbox" /></td></tr><tr><td>Leaves</td><td className="text-center"><input type="checkbox" checked="" /></td><td className="text-center"><input type="checkbox" checked="" /></td><td className="text-center"><input type="checkbox" checked="" /></td><td className="text-center"><input type="checkbox" /></td><td className="text-center"><input type="checkbox" /></td><td className="text-center"><input type="checkbox" /></td></tr><tr><td>Clients</td><td className="text-center"><input type="checkbox" checked="" /></td><td className="text-center"><input type="checkbox" checked="" /></td><td className="text-center"><input type="checkbox" checked="" /></td><td className="text-center"><input type="checkbox" /></td><td className="text-center"><input type="checkbox" /></td><td className="text-center"><input type="checkbox" /></td></tr><tr><td>Projects</td><td className="text-center"><input type="checkbox" checked="" /></td><td className="text-center"><input type="checkbox" /></td><td className="text-center"><input type="checkbox" /></td><td className="text-center"><input type="checkbox" /></td><td className="text-center"><input type="checkbox" /></td><td className="text-center"><input type="checkbox" /></td></tr><tr><td>Tasks</td><td className="text-center"><input type="checkbox" checked="" /></td><td className="text-center"><input type="checkbox" checked="" /></td><td className="text-center"><input type="checkbox" checked="" /></td><td className="text-center"><input type="checkbox" checked="" /></td><td className="text-center"><input type="checkbox" /></td><td className="text-center"><input type="checkbox" /></td></tr><tr><td>Chats</td><td className="text-center"><input type="checkbox" checked="" /></td><td className="text-center"><input type="checkbox" checked="" /></td><td className="text-center"><input type="checkbox" checked="" /></td><td className="text-center"><input type="checkbox" checked="" /></td><td className="text-center"><input type="checkbox" /></td><td className="text-center"><input type="checkbox" /></td></tr><tr><td>Assets</td><td className="text-center"><input type="checkbox" checked="" /></td><td className="text-center"><input type="checkbox" checked="" /></td><td className="text-center"><input type="checkbox" checked="" /></td><td className="text-center"><input type="checkbox" checked="" /></td><td className="text-center"><input type="checkbox" /></td><td className="text-center"><input type="checkbox" /></td></tr><tr><td>Timing Sheets</td><td className="text-center"><input type="checkbox" checked="" /></td><td className="text-center"><input type="checkbox" checked="" /></td><td className="text-center"><input type="checkbox" checked="" /></td><td className="text-center"><input type="checkbox" checked="" /></td><td className="text-center"><input type="checkbox" /></td><td className="text-center"><input type="checkbox" /></td></tr></tbody></table></div>
                  </Form>

                      <Button type="submit" className="mt-3" color="danger">
                        Submit
                      </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default AddEmployee
