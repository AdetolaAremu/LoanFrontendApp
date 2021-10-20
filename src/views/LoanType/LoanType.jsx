import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {
  Badge, Card, CardHeader, CardFooter, DropdownMenu, DropdownItem,
  UncontrolledDropdown, DropdownToggle, Media, Pagination, PaginationItem, PaginationLink,
  Progress, Table, Container, Row, UncontrolledTooltip, Form,
  Button, Modal, ModalBody, ModalHeader, ModalFooter, Col,
  FormGroup, Input
} from "reactstrap";

function LoanType() {
  const [toggleModal, settoggleModal] = useState(false)
  
  const toggleSignUpModal = () => {
    settoggleModal(!toggleModal)
  }

  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <div className='text-right'>
          <Link>
            <Button onClick={toggleSignUpModal} className='mx-5'>
              Create Loan Type
            </Button>
          </Link>
        </div>

        <Modal isOpen={toggleModal}>
          <ModalHeader toggle={toggleSignUpModal}>Add Loan Type Form</ModalHeader>
          <ModalBody>
            <Form>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Loan Name
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-loan-name"
                        placeholder="e.g student loan"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-amount"
                      >
                        Amount
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-aount"
                        placeholder="e.g #15,000"
                        type="number"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Amount to be Repaid
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-repaidAount"
                        placeholder="e.g 15,500"
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
                        Repayment Due in (days):
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-dueDate"
                        placeholder="e.g 15 days"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={''}>Submit</Button>
            <Button color="danger" onClick={toggleSignUpModal}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Container className="mt-4" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Loan Types</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Loan Name</th>
                      <th scope="col">Loan Amount</th>
                      <th scope="col">Repayment Amount</th>
                      <th scope="col">Repayment Days</th>
                      <th scope="col">Actions</th>
                      <th scope="col" />
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
                        #5,500
                      </td>
                      <td>
                        14 days    
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link>
                            <span className='icon icon-shape'>
                              <i class="fas fa-eye"></i>
                            </span>
                          </Link>
                          <Link>    
                            <span className='icon icon-shape'>
                              <i class="fas fa-edit"></i>
                            </span>
                          </Link>
                          <Link>
                            <span className='icon icon-shape'>
                              <i class="fas fa-trash-alt"></i>
                            </span>
                          </Link>
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
      </div>
    </>
  )
}

export default LoanType
