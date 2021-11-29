import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import  { getPendingLoanApplication, approveLoan, rejectLoan } from "./actions/action"
import { getSingleLoanData } from 'views/LoanApplication/actions/action';
import {
  Badge,Card, CardHeader, CardFooter, DropdownMenu, DropdownItem, UncontrolledDropdown,
  DropdownToggle, Media, Pagination, PaginationItem, PaginationLink,Progress, Button, Form,
  Table, Container, Row, UncontrolledTooltip, Spinner, Modal, ModalHeader, ModalBody, Col, ModalFooter
} from "reactstrap";
import { ToastContainer } from 'react-toastify';

const init = {
  comment:''
}

const LoanPending = () => {
  const [toggleLoan, settoggleLoan] = useState(false)
  const [currentID, setcurrentID] = useState(null)
  const [Inputs, setInputs] = useState(init)

  const { applications: { applicationData, applicationLoading }, loans: { singleLoan }
  } = useSelector(state => state)
  
  const dispatch = useDispatch()

  const toggleModal = (id,e) => {
    settoggleLoan(!toggleLoan);
    setcurrentID(id)
    dispatch(getSingleLoanData(id))
  }

  const testModalTrue = (id) => {
    settoggleLoan(toggleLoan == true)
    setcurrentID(id)
    dispatch(getSingleLoanData(id))
  }

  const testModalFalse = (id) => {
    settoggleLoan(toggleLoan == false)
  }

  const handleApprove = (e) => {
    e.preventDefault()
    dispatch(approveLoan(currentID))
  }

  const handleChange = (e) => {
    setInputs({...Inputs, [e.target.name]: e.target.value})
  }

  const handleReject = (e) => {
    e.preventDefault();   
    dispatch(rejectLoan(currentID, Inputs))
  }

  useEffect(() => {
   dispatch(getPendingLoanApplication());
  }, [])

  return (
    <div>
      <ToastContainer />
      <div className="header bg-gradient-info pb-5 pt-5 pt-md-8">
        <Container className="mt-4" fluid>
            {/* Table */}
            <Row>
              <div className="col">
                <Card className="shadow">
                  <CardHeader className="border-0">
                    <h3 className="mb-0">Loan Pending Table</h3>
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
                        </tr>
                      </thead>
                      <tbody>
                        {applicationData.map((pendingloan, index) => (
                          <tr key={pendingloan.id}>
                            <th scope="col">{ index + 1 }</th>
                            <th scope="row">
                              <Media className="align-items-center">
                                <span className="mb-0 text-sm">
                                  { pendingloan?.user?.first_name } { pendingloan?.user?.last_name }
                                </span>
                              </Media>
                            </th>
                            <td>Loan</td>
                            <td className=''>
                              <Badge color="" className="badge-dot mr-4 text-capitalize">
                                <i className="bg-warning" />
                                { pendingloan?.loan_status }
                              </Badge>
                            </td>
                            <td>
                            { new Date(pendingloan?.created_at).toLocaleDateString("en-us", 
                              { day:"2-digit", month:"2-digit", year:"numeric" }
                            ) }   
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <Link>
                                  <Button onClick={(e) => toggleModal(pendingloan.id, e)} className="bg-gradient-primary text-white">
                                    Take Action
                                  </Button>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        ))}             
                      </tbody>
                    </Table>
                  ): (<div className='text-center'>No data to display</div>)}
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
      <Modal isOpen={toggleLoan} size="lg">
        <ModalHeader toggle={toggleModal}>Take Action on Loan Request</ModalHeader>
        <Form>
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
              <div className='text-center mt-2'>    
                <strong>Admin Comment:</strong> 
                <textarea
                  name="comment"
                  onChange={handleChange} 
                  value={Inputs.comment}
                  className='font-weight-bold' 
                  style={{ minWidth:"100%" }} 
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={handleApprove}>Approve</Button>
            <Button color="danger" type='submit' onClick={handleReject}>Reject</Button>
            <Button color="primary" onClick={testModalFalse}>Close</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  )
}

export default LoanPending
