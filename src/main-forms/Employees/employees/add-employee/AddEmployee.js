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
  FormFeedback,
} from "reactstrap"

import { useFormik } from "formik"
import * as Yup from "yup"
//Import Date Picker
import "react-datepicker/dist/react-datepicker.css"

const AddEmployee = () => {
  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    username: "",
    profile: "",
    email: "",
    cpassword: "",
    password: "",
    employee_id: "",
    joining_date: "",
    phone: "",
    company: "",
    department: "",
    designation: "",
  })

  const changeFormdata = e => {
    if (e.target.name === "profile") {
      setFormdata({ ...formdata, [e.target.name]: e.target.files[0] })
    } else {
      setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }
    console.table(formdata)
  }

  // Form validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      firstname: "",
      lastname: "",
      city: "",
      state: "",
      zip: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Please Enter Your First Name"),
      lastname: Yup.string().required("Please Enter Your Last Name"),
      city: Yup.string().required("Please Enter Your City"),
      state: Yup.string().required("Please Enter Your State"),
      zip: Yup.string().required("Please Enter Your Zip"),
    }),
    onSubmit: values => {
      console.log("values", values)
    },
  })

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Create New Employee</title>
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
                  <Form
                    onSubmit={e => {
                      e.preventDefault()
                      validation.handleSubmit()
                      return false
                    }}
                  >
                    <Row>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            First Name <span className="text-danger">*</span>
                          </label>
                          <Input
                            name="firstname"
                            placeholder="First name"
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.firstname || ""}
                            invalid={
                              validation.touched.firstname &&
                              validation.errors.firstname
                                ? true
                                : false
                            }
                          />
                          {validation.touched.firstname &&
                          validation.errors.firstname ? (
                            <FormFeedback type="invalid">
                              {validation.errors.firstname}
                            </FormFeedback>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            Last Name <span className="text-danger"></span>
                          </label>
                          <input
                            className="form-control"
                            name="lastname"
                            onChange={changeFormdata}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            Username <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            name="username"
                            onChange={changeFormdata}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">Profile</label>
                          <input
                            className="form-control"
                            name="profile"
                            onChange={changeFormdata}
                            type="file"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            Email <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            name="email"
                            onChange={changeFormdata}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            Password <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            name="password"
                            onChange={changeFormdata}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            Confirm Password{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            name="cpassword"
                            onChange={changeFormdata}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            Employee ID <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            name="employee_id"
                            onChange={changeFormdata}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            Joining Date <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            name="joining_date"
                            onChange={changeFormdata}
                            type="date"
                          />
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            Phone <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            name="phone"
                            onChange={changeFormdata}
                            type="text"
                          />
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            Company <span className="text-danger">*</span>
                          </label>
                          <select
                            className="form-control"
                            name="company"
                            onChange={changeFormdata}
                          >
                            <option>Select Company</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            Department <span className="text-danger">*</span>
                          </label>
                          <select
                            className="form-control"
                            name="department"
                            onChange={changeFormdata}
                          >
                            <option>Select Department</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="col-form-label">
                            Designation <span className="text-danger">*</span>
                          </label>
                          <select
                            className="form-control"
                            name="designation"
                            onChange={changeFormdata}
                          >
                            <option>Select Designation</option>
                          </select>
                        </div>
                      </div>
                    </Row>
                    <div className="table-responsive m-t-15">
                      <table className="table table-striped custom-table">
                        <thead>
                          <tr>
                            <th>Module Permission</th>
                            <th className="text-center">Read</th>
                            <th className="text-center">Write</th>
                            <th className="text-center">Create</th>
                            <th className="text-center">Delete</th>
                            <th className="text-center">Import</th>
                            <th className="text-center">Export</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Holidays</td>
                            <td className="text-center">
                              <input type="checkbox" checked="" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                          </tr>
                          <tr>
                            <td>Leaves</td>
                            <td className="text-center">
                              <input type="checkbox" checked="" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" checked="" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" checked="" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                          </tr>
                          <tr>
                            <td>Clients</td>
                            <td className="text-center">
                              <input type="checkbox" checked="" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" checked="" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" checked="" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                          </tr>
                          <tr>
                            <td>Projects</td>
                            <td className="text-center">
                              <input type="checkbox" checked="" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                          </tr>
                          <tr>
                            <td>Tasks</td>
                            <td className="text-center">
                              <input type="checkbox" checked="" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" checked="" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" checked="" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" checked="" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                          </tr>
                          <tr>
                            <td>Chats</td>
                            <td className="text-center">
                              <input type="checkbox" checked="" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" checked="" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" checked="" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" checked="" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                          </tr>
                          <tr>
                            <td>Assets</td>
                            <td className="text-center">
                              <input type="checkbox" checked="" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" checked="" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" checked="" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" checked="" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                          </tr>
                          <tr>
                            <td>Timing Sheets</td>
                            <td className="text-center">
                              <input type="checkbox" checked="" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" checked="" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" checked="" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" checked="" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                            <td className="text-center">
                              <input type="checkbox" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Form>

                  <Button
                    type="submit"
                    className="mt-3"
                    onClick={() => validation.handleSubmit()}
                    color="danger"
                  >
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
