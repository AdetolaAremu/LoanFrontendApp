import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAcceptedLoanApplication } from "./actions/action";
import { getSingleLoanData } from 'views/LoanApplication/actions/action';
import {
  Badge, Card, CardHeader, CardFooter, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle,
  Media, Pagination, PaginationItem, PaginationLink,Progress, Button, Table,Container, Row,
  UncontrolledTooltip,  Spinner, Modal, ModalHeader, ModalBody, Col, ModalFooter
} from "reactstrap";
import { ToastContainer } from 'react-toastify';

const LoanApproved = () => {
  const [toggleModal, settoggleModal] = useState(false)
  const [currentID, setcurrentID] = useState(null)
  const dispatch = useDispatch()

  const { applications: { applicationData, applicationLoading }, loans: { singleLoan } } = useSelector(state => state)

  const handleModal = (id) => {
    setcurrentID(id);
    settoggleModal(!toggleModal);
    dispatch(getSingleLoanData(id));
  }

  useEffect(() => {
    dispatch(getAcceptedLoanApplication())
  }, [])

  return (
    <div>
      <ToastContainer />
      <div className="header bg-gradient-info pb-5 pt-5 pt-md-8">
        <Container className="mt-4" fluid>
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Loan Approved Table</h3>
                </CardHeader>
                { applicationLoading ? (<Spinner className='m-auto' animation="border" 
                  style={{ width:"4rem", height:"4rem" }} />)
                  : applicationData.length ? (
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Request Type</th>
                        <th scope="col">Loan Status</th>
                        <th scope="col">Date Created</th>
                        <th scope="col">Actions</th>
                        {/* <th scope="col" /> */}
                      </tr>
                    </thead>
                    <tbody>
                    {applicationData?.map((acceptedLoan, index) => (
                      <tr key={acceptedLoan.id}>
                        <th scope="col">{ index + 1 }</th>
                        <th scope="row">
                          <Media className="align-items-center">
                            <span className="mb-0 text-sm">
                              { acceptedLoan?.user?.first_name } { acceptedLoan?.user?.last_name }
                            </span>
                          </Media>
                        </th>
                        <td>Loan</td>
                        <td className=''>
                          <Badge color="" className="badge-dot mr-4 text-capitalize">
                            <i className="bg-success" />
                            { acceptedLoan?.loan_status }
                          </Badge>
                        </td>
                        <td>
                        { new Date(acceptedLoan?.created_at).toLocaleDateString("en-us", 
                          { day:"2-digit", month:"2-digit", year:"numeric" }
                        ) }   
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link>
                              <Button onClick={(e) => handleModal(acceptedLoan.id, e)} className="bg-gradient-primary text-white">
                                Take Action
                              </Button>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                    </tbody>
                  </Table>
                ): (<div className='text-center'>No data to display</div>) }
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
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
      <Modal isOpen={toggleModal} size="lg">
        <ModalHeader toggle={handleModal}>Take Action on Loan Request</ModalHeader>
          <ModalBody>
            <div>
              <Row>
                <Col>
                  <small>First Name:</small> 
                  <div className='font-weight-bold'>{ singleLoan?.user?.first_name }</div>
                </Col>
                <Col>
                  <small>Last Name:</small>
                  <div className='text-capitalize font-weight-bold'>{ singleLoan?.user?.last_name }</div>
                </Col>
                <Col>
                  <small>Phone Number:</small> 
                  <div className='text-capitalize font-weight-bold'>
                    { singleLoan?.user?.phone }
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <small>Email:</small> 
                  <div className='text-capitalize font-weight-bold'>
                    { singleLoan?.user?.email }
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr className="my-3" />
                  <h6 className="heading-small text-muted">
                    Account Information
                  </h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <small>Account Number:</small> 
                  <div className='font-weight-bold'>{ singleLoan?.account_number }</div>
                </Col>
                <Col>
                  <small>Account type:</small>
                  <div className='text-capitalize font-weight-bold'>{ singleLoan?.account_type }</div>
                </Col>
                <Col>
                  <small>Bank Name:</small> 
                  <div className='text-capitalize font-weight-bold'>
                    { singleLoan?.bank_name }
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr className="my-3" />
                  <h6 className="heading-small text-muted">
                    Loan Category
                  </h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <small>Category Name:</small> 
                  <div className='font-weight-bold'>{ singleLoan?.loan_type?.name }</div>
                </Col>
                <Col>
                  <small>Amount:</small> 
                  <div className='font-weight-bold'>{ singleLoan?.loan_type?.amount }</div>
                </Col>
                <Col>
                  <small>Repayment Amount:</small> 
                  <div className='font-weight-bold'>{ singleLoan?.loan_type?.repayment_amount }</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <small>Payment Due In:</small> 
                  <div className='font-weight-bold'>{ singleLoan?.loan_type?.repayment_days }</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr className="my-3" />
                  <h6 className="heading-small text-muted">
                    Guarantor's Data
                  </h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <small>Full Name:</small> 
                  <div className='font-weight-bold'>{ singleLoan?.guarantor?.full_name }</div>
                </Col>
                <Col>
                  <small>Phone Number:</small>
                  <div className='text-capitalize font-weight-bold'>{ singleLoan?.guarantor?.phone }</div>
                </Col>
                <Col>
                  <small>Email:</small> 
                  <div className='text-capitalize font-weight-bold'>
                    { singleLoan?.guarantor?.email }
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <small>Relationship:</small> 
                  <div className='text-capitalize font-weight-bold'>
                    { singleLoan?.guarantor?.relationship }
                  </div>
                </Col>
                <Col>
                  <small>Address:</small> 
                  <div className='text-capitalize font-weight-bold'>
                    { singleLoan?.guarantor?.address }
                  </div>
                </Col>
                <Col></Col>
              </Row>
              <Row className='mt-2'>
                <Col>
                  <small>Reason for Loan Reqest:</small> 
                  <div className='text-capitalize font-weight-bold'>
                    { singleLoan?.reason }
                  </div>
                </Col>
              </Row>
              {!singleLoan?.rejection_reason == null || singleLoan?.status === 'failed' ? ( '' ): (
                <Row className='mt-2'>
                  <Col>
                    <small>Loan Rejection Due to:</small> 
                    <div className='text-capitalize font-weight-bold'>
                      { singleLoan?.rejection_reason }
                    </div>
                  </Col>
                </Row>
              ) }
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={handleModal}>Close</Button>
          </ModalFooter>
      </Modal>
    </div>
  )
}

export default LoanApproved
