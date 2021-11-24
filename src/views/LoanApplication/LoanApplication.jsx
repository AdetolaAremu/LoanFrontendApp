import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { getLoanData, createLoanApplication, getSingleLoanData } from "./actions/action";
import { getTypeLoanData } from "../LoanType/actions/action";
import { useDispatch, useSelector } from "react-redux";
import {
  Badge, Card, CardHeader, CardFooter, DropdownMenu, DropdownItem, UncontrolledDropdown,
  DropdownToggle, Media, Pagination, PaginationItem, PaginationLink, Button,
  Progress, Table, Container, Row, UncontrolledTooltip, Modal, ModalBody,
  ModalHeader, ModalFooter, Col, FormGroup, Input, Form, Label
} from "reactstrap";
import { ToastContainer } from 'react-toastify';
import isEmpty from 'utils/isEmpty';

const initialState = {
  loan_type_id:'',
  reason:'',
  bank_name:'',
  account_number:'',
  account_type:'',
  loan_status:'',
  full_name:'',
  address:'',
  phone:'',
  relationship:'',
  email:''
}

const LoanApplication = () => {
  const [toggleLoanApplication, settoggleLoanApplication] = useState(false)
  const [toggleViewModal, settoggleViewModal] = useState(false)
  const [Inputs, setInputs] = useState(initialState)
  const [currentID, setcurrentID] = useState({})

  const { 
    loanType: { loanTypeData }, 
    loans: { loanData, loanloading, singleLoan },
    dashboard: { data }
    } = useSelector(state => state)

  const dispatch = useDispatch()
  
  const ModalLoanApplication = () => {
    settoggleLoanApplication(!toggleLoanApplication);
    dispatch(getTypeLoanData());
  }

  const ViewLoanApplicationModal = (id) => {
    setcurrentID(id)
    dispatch(getSingleLoanData(id));
    settoggleViewModal(!toggleViewModal)

  }

  const handleChange = (e) => {
    setInputs({...Inputs, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('inputs', Inputs);
    dispatch(createLoanApplication(Inputs));
  }

  useEffect(() => {
    dispatch(getLoanData());
  }, [])

  const loanColor = (loan_status) => {
    if (loan_status == 'pending') {
      return 'orange'
    }
    if (loan_status == 'failed') {
      return 'red'
    }
    if (loan_status == 'accepted') {
      return 'green'
    }
  }

  return (
    <div>
      <ToastContainer />
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <div className='text-right'>
          <Link>
            <Button onClick={ModalLoanApplication} 
              // disabled={data?.data?.kyc?.status == 'pending' 
              //   || data?.data?.kyc?.status == 'rejected' || data?.data?.kyc == null 
              // } 
              className='mx-5'
            >
              Create Loan Application
            </Button>
          </Link>
        </div>
        <Container className="mt-4" fluid>
            {/* Table */}
            <Row>
              <div className="col">
                <Card className="shadow">
                  <CardHeader className="border-0">
                    <h3 className="mb-0">Loan Application</h3>
                  </CardHeader>
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Loan Type</th>
                        <th scope="col">Loan Amount</th>
                        <th scope="col">Loan Status</th>
                        <th scope="col">Repayment Status</th>
                        <th scope="col">Date Created</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loanData?.map((loan) => (
                        <tr key={loan.id}>
                          <th scope="row">
                            <Media className="align-items-center">
                              <span className="mb-0 text-sm">
                                { loan?.loan_type?.name }
                              </span>
                            </Media>
                          </th>
                          <td>{ loan?.loan_type?.amount }</td>
                          <td>
                            {loan.loan_status == 'pending' ?
                               ( <Badge color="" className="badge-dot mr-4 text-capitalize">
                                  <i className="bg-warning" />
                                  { loan.loan_status }
                                </Badge>)
                              : loan.loan_status == 'accepted' ? (
                                <Badge color="" className="badge-dot mr-4 text-capitalize">
                                  <i className="bg-success" />
                                  { loan.loan_status }
                                </Badge>
                              ) : loan.loan_status == 'failed' ? (
                                <Badge color="" className="badge-dot mr-4 text-capitalize">
                                  <i className="bg-danger" />
                                  { loan.loan_status }
                                </Badge>
                              ) : "" 
                            }
                            
                          </td>
                          <td>
                            { loan?.repaid }
                          </td>
                          <td>
                            {/* { loan?.created_at } */}
                            {new Date(loan?.created_at).toLocaleDateString("en-us", {
                              month:'long', day:'2-digit', year:'numeric' 
                            })}    
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <button onClick={(e) => ViewLoanApplicationModal(loan.id, e)} style={{ border:"1px solid white"}}>
                                {/* <span className='icon icon-shape' style={{ height:"5px !important", width:"5px" }}> */}
                                  <i class="fas fa-eye"></i>
                                {/* </span> */}
                              </button>
                              {/* <Link>    
                                <span className='icon icon-shape'>
                                  <i class="fas fa-edit"></i>
                                </span>
                              </Link>
                              <Link>
                                <span className='icon icon-shape'>
                                  <i class="fas fa-trash-alt"></i>
                                </span>
                              </Link> */}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
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
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            2 <span className="sr-only">(current)</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            3
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-angle-right" />
                            <span className="sr-only">Next</span>
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </nav>
                  </CardFooter>
                </Card>
              </div>
            </Row>
        </Container>
        <Modal isOpen={toggleLoanApplication}>
          <ModalHeader toggle={ModalLoanApplication}>Create Loan Application</ModalHeader>
          <Form onSubmit={handleSubmit}>
            <ModalBody>
              <div className="pl-lg-4">
                  <div>
                    <div>
                      <Row>
                        <Col lg="12">
                          <FormGroup>
                            <Label className="form-control-label">Loan Type</Label>
                            <Input 
                              onChange={handleChange} 
                              value={Inputs.loan_type_id}
                              type="select" 
                              name="loan_type_id"
                              id="exampleSelect"
                            >
                              <option defaultValue>Choose Loan type</option>
                              {loanTypeData?.map((type) => (
                                <option className='font-weight-bold' key={type.id} value={type.id}>
                                  { type?.name } | Amount: { type?.amount } | To Repay: { type?.repayment_amount }
                                </option>
                              ))}
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-amount"
                      >
                        Bank Name
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-amount"
                        name='bank_name'
                        value={Inputs.bank_name}
                        onChange={handleChange}
                        placeholder="e.g Access bank"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <Label className="form-control-label">Account Type</Label>
                      <Input 
                        value={Inputs.account_type} 
                        onChange={handleChange} 
                        type="select" 
                        name="account_type" 
                        id="exampleSelect"
                      >
                        <option defaultValue>Choose...</option>
                        <option className='text-capitalize'>savings</option>
                        <option className='text-capitalize'>current</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-amount"
                      >
                        Account Number
                      </label>
                      <Input
                        className="form-control-alternative"
                        name="account_number"
                        value={Inputs.account_number}
                        onChange={handleChange}
                        placeholder="e.g 0272637383"
                        type="text"
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
                        Full Name
                      </label>
                      <Input
                        className="form-control-alternative"
                        name="full_name"
                        value={Inputs.full_name}
                        onChange={handleChange}
                        placeholder="e.g John Doe"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-email"
                      >
                        Email
                      </label>
                      <Input
                        className="form-control-alternative"
                        name="email"
                        value={Inputs.email}
                        onChange={handleChange}
                        placeholder="e.g johndoe@mail.com"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-email"
                      >
                        Full Address
                      </label>
                      <Input
                        className="form-control-alternative"
                        name="address"
                        value={Inputs.address}
                        onChange={handleChange}
                        placeholder="e.g 5 Wall Street"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-email"
                      >
                        Phone Number
                      </label>
                      <Input
                        className="form-control-alternative"
                        name="phone"
                        value={Inputs.phone}
                        onChange={handleChange}
                        placeholder="e.g 5 Wall Street"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-email"
                      >
                        Relationship
                      </label>
                      <Input
                        className="form-control-alternative"
                        name="relationship"
                        value={Inputs.relationship}
                        onChange={handleChange}
                        placeholder="e.g 5 Wall Street"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <label
                        className="form-control-label"
                      >
                        Reason for Loan Request
                      </label>
                      <Input
                        type="textarea"
                        value={Inputs.reason}
                        name='reason'
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="success" type="submit" disabled={loanloading}>Submit</Button>
              <Button color="danger" onClick={ModalLoanApplication}>Cancel</Button>
            </ModalFooter>
          </Form>
        </Modal>
        <Modal isOpen={toggleViewModal} size="lg">
          <ModalHeader toggle={ViewLoanApplicationModal}>Loan Details</ModalHeader>
          <ModalBody>
            <div>
              <div className='text-right font-weight-bold' >
                <Button
                  // color="primary"
                  href="#pablo"
                  className="text-capitalize text-white"
                  onClick={(e) => e.preventDefault()}
                  style={{ background: loanColor(singleLoan?.loan_status )}}
                  size="sm"
                >
                  {singleLoan?.loan_status}
                </Button>
              </div>
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
              {!singleLoan?.rejection_reason == null || singleLoan?.status == 'rejected' ? (
                <Row className='mt-2'>
                  <Col>
                    <small>Loan Rejection Due to:</small> 
                    <div className='text-capitalize font-weight-bold'>
                      { singleLoan?.rejection_reason }
                    </div>
                  </Col>
                </Row>
              ): '' }
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={ViewLoanApplicationModal}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  )
}

export default LoanApplication;