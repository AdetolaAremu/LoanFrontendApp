import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {
  Badge, Card, CardHeader, CardFooter, DropdownMenu, DropdownItem, UncontrolledDropdown,
  DropdownToggle, Media, Pagination, PaginationItem, PaginationLink, Button,
  Progress, Table, Container, Row, UncontrolledTooltip, Modal, ModalBody, 
  ModalHeader, ModalFooter, Col, FormGroup, Input, Form, Label
} from "reactstrap";

const LoanApplication = () => {
  const [toggleLoanApplication, settoggleLoanApplication] = useState(false)
  
  const ModalLoanApplication = () => {
    settoggleLoanApplication(!toggleLoanApplication);
  }

  return (
    <div>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <div className='text-right'>
          <Link>
            <Button onClick={ModalLoanApplication} className='mx-5'>
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
                      <tr>
                        <th scope="row">
                          <Media className="align-items-center">
                            <span className="mb-0 text-sm">
                              Student Loan
                            </span>
                          </Media>
                        </th>
                        <td>#5000</td>
                        <td>
                          <Badge color="" className="badge-dot mr-4">
                            <i className="bg-warning" />
                            pending
                          </Badge>
                        </td>
                        <td>
                          Not Paid    
                        </td>
                        <td>
                          2021-10-10    
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link>
                              <span className='icon icon-shape'>
                                <i class="fas fa-eye"></i>
                              </span>
                            </Link>
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
          <ModalBody>
            <Form>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <Label className="form-control-label">Loan Type</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option defaultValue>Choose Loan type</option>
                        <option>Student Loan</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-amount"
                      >
                        Loan Amount
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-aount"
                        value="5000"
                        type="number"
                        disabled
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-amount"
                      >
                        Amount to be repaid
                      </label>
                      <Input
                        className="form-control-alternative"
                        id=""
                        value="15500"
                        type="text"
                        disabled
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-amount"
                      >
                        Loan due in (days)
                      </label>
                      <Input
                        className="form-control-alternative"
                        id=""
                        value="14 days"
                        type="text"
                        disabled
                      />
                    </FormGroup>
                  </Col>
                </Row>
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
                        id="input-aount"
                        placeholder="e.g Access bank"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <Label className="form-control-label">Account Type</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option defaultValue>Choose...</option>
                        <option>Savings</option>
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
                        id=""
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
                        id=""
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
                        id=""
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
                        id=""
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
                        id=""
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
                        id=""
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
                        value="Enu gbe"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={''}>Submit</Button>
            <Button color="danger" onClick={ModalLoanApplication}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  )
}

export default LoanApplication;