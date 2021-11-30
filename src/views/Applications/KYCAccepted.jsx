import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RectSpinner } from 'utils/loader/Loader';
import { getSingleKYCData } from 'views/KYC/actions/action';
import { getApprovedKYC } from './actions/action';
import {
  Badge, Card, CardHeader, CardFooter, Media, Pagination, PaginationItem, PaginationLink, Progress, Button, Table,
  Container, Row, ModalFooter, Modal, ModalBody, ModalHeader, Form, Col, FormGroup, Input, Spinner
} from "reactstrap";
import { ToastContainer } from 'react-toastify';


const KYCAccepted = () => {
  const [toggleAccepted, settoggleAccepted] = useState(false)
  const [currentID, setcurrentID] = useState(null)

  const { applications: { applicationData, applicationLoading }, kyc: { singleKYC } } 
    = useSelector(state => state)
  
  const dispatch = useDispatch();

  const toggleModal = (id) => {
    setcurrentID(id)
    dispatch(getSingleKYCData(id))
    settoggleAccepted(!toggleAccepted)
  }

  useEffect(() => {
   dispatch(getApprovedKYC());
  }, [])

  return (
    <>
      <ToastContainer />
      <div className="header bg-gradient-info pb-5 pt-5 pt-md-8">
        <Container className="mt-4" fluid>
            <Row>
              <div className="col">
                <Card className="shadow">
                  <CardHeader className="border-0">
                    <h3 className="mb-0">KYC Accepted Table</h3>
                  </CardHeader>
                  { applicationLoading ? (<Spinner className='m-auto' animation="border" 
                    style={{ width:"4rem", height:"4rem" }} />) : applicationData.length ? (
                    <Table className="align-items-center table-flush" responsive>
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Request Type</th>
                          <th scope="col">KYC Status</th>
                          <th scope="col">Date Created</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                          {applicationData.map((accepted, index) => (
                            <tr>
                              <th scope="col">{ index + 1 }</th>
                              <th scope="row">
                                <Media className="align-items-center">
                                  <span className="mb-0 text-sm">
                                    { accepted?.user?.first_name } { accepted?.user?.last_name }
                                  </span>
                                </Media>
                              </th>
                              <td>KYC</td>
                              <td>
                                <Badge color="" className="badge-dot mr-4 text-capitalize">
                                  <i className="bg-success" />
                                  { accepted?.status }
                                </Badge>
                              </td>
                              <td>
                                {
                                  new Date(accepted?.created_at).toLocaleDateString("en-us", {
                                    day:"2-digit", month:"2-digit", year:"numeric"
                                  })
                                }   
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <Link>
                                    <Button onClick={e => toggleModal(accepted?.id)} className="bg-gradient-primary text-white">
                                      Take Action
                                    </Button>
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </Table>
                   ) : (<div className='text-center'>No data to display</div>)}
                  <CardFooter className="py-4">
                    <nav aria-label="...">
                      <Pagination
                        className="pagination justify-content-end mb-0"
                        listClassName="justify-content-end mb-0"
                      >
                        <PaginationItem className="active">
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </nav>
                  </CardFooter>
                </Card>
              </div>
            </Row>
        </Container>
      </div>

      <Modal isOpen={toggleAccepted} size="lg">
        <ModalHeader toggle={toggleModal}>Approved KYC Request</ModalHeader>
        <Form>
          <ModalBody>
              <Row>
                <Col>
                  <small>First Name:</small> 
                  <div className='font-weight-bold'>{ singleKYC?.user?.first_name }</div>
                </Col>
                <Col>
                  <small>Last name:</small>
                  <div className='text-capitalize font-weight-bold'>{ singleKYC?.user?.last_name }</div>
                </Col>
                <Col>
                  <small>Phone Number:</small> 
                  <div className='text-capitalize font-weight-bold'>
                    { singleKYC?.user?.phone }
                  </div>
                </Col>
                <Col>
                  <small>Email:</small> 
                  <div className='font-weight-bold'>
                    { singleKYC?.user?.email }
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <small>House Address:</small> 
                  <div className='font-weight-bold'>{ singleKYC?.address }</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr className="my-3" />
                  <h6 className="heading-small text-muted">
                    More Personal Information
                  </h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <small>Nationality:</small> 
                  <div className='font-weight-bold'>{ singleKYC?.country?.name }</div>
                </Col>
                <Col>
                  <small>State:</small> 
                  <div className='font-weight-bold'>{ singleKYC?.state?.name }</div>
                </Col>
                <Col>
                  <small>Identification Type:</small> 
                  <div className='font-weight-bold text-capitalize'>
                    { singleKYC?.identification_type }
                  </div>
                </Col>
                <Col>
                  <small>ID Number:</small>
                  <div className='font-weight-bold'>{singleKYC?.id_number}</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <small>City:</small> 
                  <div className='font-weight-bold'>{ singleKYC?.city }</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr className="my-3" />
                  <h6 className="heading-small text-muted">
                    Next of Kin Data
                  </h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <small>NOK First Name:</small> 
                  <div className='font-weight-bold'>{ singleKYC?.nok_first_name }</div>
                </Col>
                <Col>
                  <small>NOK Last Name:</small>
                  <div className='text-capitalize font-weight-bold'>{ singleKYC?.nok_last_name }</div>
                </Col>
                <Col>
                  <small>NOK Email:</small> 
                  <div className='text-capitalize font-weight-bold'>
                    { singleKYC?.nok_email }
                  </div>
                </Col>
                <Col>
                  <small>NOK Phone Number:</small> 
                  <div className='text-capitalize font-weight-bold'>
                    { singleKYC?.nok_phone }
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <small>NOK Country:</small> 
                  <div className='text-capitalize font-weight-bold'>
                    { singleKYC?.nokcountry?.name }
                  </div>
                </Col>
                <Col>
                  <small>NOK State:</small> 
                  <div className='text-capitalize font-weight-bold'>
                    { singleKYC?.nokstate?.name }
                  </div>
                </Col>
                <Col>
                  <small>NOK City:</small> 
                  <div className='text-capitalize font-weight-bold'>
                    { singleKYC?.nok_city }
                  </div>
                </Col>
              </Row>
              <Row className='mt-2'>
                <Col>
                  <small>NOK Address:</small> 
                  <div className='text-capitalize font-weight-bold'>
                    { singleKYC?.nok_address }
                  </div>
                </Col>
              </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={toggleModal}>Close</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  )
}

export default KYCAccepted