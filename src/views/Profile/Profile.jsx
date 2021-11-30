import React, {useState} from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import {
  Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Container, Row, Col, ModalBody, ModalHeader,
  Modal, ModalFooter, Spinner
} from "reactstrap";
import { updateProfile } from './actions/action';
import process from 'env';
import { ToastContainer } from 'react-toastify';

const service_url = process.env.SERVICE_URL

const Profile = () => {
  const [inputs, setinputs] = useState([])
  const [editProfileModal, seteditProfileModal] = useState(false)

  const dispatch = useDispatch();
  
  const { admin: { dashboardData, dashboardDataLoading }, profiler: {profileLoading}  } = useSelector(state => state)

  const toggleEditModal = () => {
    seteditProfileModal(!editProfileModal)
    getEditData()
  }

  const closeModal = () => {
    seteditProfileModal(editProfileModal === false)
  }

  const getEditData = () => {
    axios.get(`${service_url}/user/currentuser`)
    .then((res) => {
      setinputs(res.data.data);
    })
  }

  const handleChange = (e) => {
    setinputs({...inputs, [e.target.name]:e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(inputs))
  }

  return (
    <>
      <ToastContainer />
      <div className="header pb-5 pt-5 pt-lg-8 d-flex bg-gradient-info align-items-center">
        <ToastContainer />
        <Container className="mb-2" fluid>
          <Row>
            <Col className="order-xl-4" xl="10">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">My Profile Details</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={toggleEditModal}
                        size="sm"
                      >
                        Edit
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <fieldset disabled>
                    <Form>
                      <h6 className="heading-small text-muted mb-4">
                        User information
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                              >
                                First Name
                              </label>
                              <Input
                                className="form-control-alternative"
                                value={dashboardData.first_name}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                              >
                                Last Name
                              </label>
                              <Input
                                className="form-control-alternative"
                                value={dashboardData.last_name}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                              >
                                Email address
                              </label>
                              <Input
                                className="form-control-alternative"
                                value={dashboardData.email}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                              >
                              Phone Number
                              </label>
                              <Input
                                className="form-control-alternative"
                                value={dashboardData.phone}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                    </Form>
                  </fieldset>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        <Modal isOpen={editProfileModal} size="lg" id='edit_profile'>
          <ModalHeader toggle={closeModal}>Edit Profile</ModalHeader>
            {!inputs.first_name ? (<Spinner className='m-auto d-flex justify-content-center' 
              animation="border" style={{ width:"4rem", height:"4rem" }} />) : (
                <Form onClick={handleSubmit}>
                  <ModalBody>
                      <Row>
                        <Col>
                          <FormGroup>
                            <label
                              className="form-control-label">
                              First Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={inputs.first_name}
                              name="first_name"
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <label
                              className="form-control-label">
                              Last Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={inputs.last_name}
                              name="last_name"
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <label
                              className="form-control-label">
                              Email
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={inputs.email}
                              type='email'
                              name="email"
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <label
                              className="form-control-label">
                              Phone Number
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={inputs.phone}
                              name="phone"
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                  </ModalBody>
                  <ModalFooter>
                    <Button className='btn-success' type='submit'>Submit</Button>
                    <Button className='btn-danger' onClick={closeModal}>Cancel</Button>
                  </ModalFooter>
                </Form>
              )}
        </Modal>
      </div>
    </>
  );
};

export default Profile;
