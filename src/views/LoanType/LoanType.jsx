import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import process from 'env.js';
import { getTypeLoanData, createLoanTypeApplication, deleteLoanType, updateLoanType, getSingleLoanType } from './actions/action'
import { RectSpinner } from "utils/loader/Loader"
import {
  Badge, Card, CardHeader, CardFooter, Media, Pagination, PaginationItem, PaginationLink,
  Progress, Table, Container, Row, UncontrolledTooltip, Form,
  Button, Modal, ModalBody, ModalHeader, ModalFooter, Col, FormGroup, Input, Spinner
} from "reactstrap";
import { ToastContainer } from 'react-toastify';
import isEmpty from 'utils/isEmpty';

const service_url = process.env.SERVICE_URL

const initialState = {
  name:"",
  amount:"",
  repayment_amount:"",
  repayment_days:""
}

const LoanType = () => {
  const [toggleModal, settoggleModal] = useState(false)
  const [toggleDeleteMOdal, settoggleDeleteMOdal] = useState(false)
  const [toggleEditMOdal, settoggleEditMOdal] = useState(false)
  const [currentID, setcurrentID] = useState(null)
  const [updateCurrentID, setupdateCurrentID] = useState(null)
  const [Inputs, setInputs] = useState(initialState)
  const [updateInputs, setupdateInputs] = useState([])

  const dispatch = useDispatch()

  const { loanType: { loanTypeData, errors, loading, loanTypeCRUD } } = useSelector(state => state)
  
  const toggleSignUpModal = () => {
    settoggleModal(!toggleModal)
  }

  const handleToggleDeleteModal = (id) => {
    setcurrentID(id)
    settoggleDeleteMOdal(!toggleDeleteMOdal)
  }

  const handleToggleEditModal = (id, e) => {
    setupdateCurrentID(id)
    loadUpdateData(id);
    settoggleEditMOdal(!toggleEditMOdal)
  }

  const handleSubmitEdit = (e) => {
    e.preventDefault()
    dispatch(updateLoanType(updateCurrentID, updateInputs))
  }

  const handleEditChange = (e) => {
    setupdateInputs({...updateInputs, [e.target.name]: e.target.value})
  }

  const deleteType = (id, e) => {
    dispatch(deleteLoanType(currentID))
    settoggleDeleteMOdal(toggleDeleteMOdal == false)
  }

  const handleChange = (e) => {
    setInputs({...Inputs, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createLoanTypeApplication(Inputs))
  }

  const loadUpdateData = (id) => {
    axios.get(`${service_url}/loan-types/${id}`)
    .then((res) => {
        setupdateInputs(res.data.data)
    })
  }

  useEffect(() => {
    dispatch(getTypeLoanData())
  }, [])

  return (
    <>
      <ToastContainer />
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <div className='text-right'>
          <Link>
            <Button onClick={toggleSignUpModal} className='mx-5'>
              Create Loan Type
            </Button>
          </Link>
        </div>

        <Modal isOpen={toggleDeleteMOdal}>
          <ModalHeader toggle={handleToggleDeleteModal}>Add Loan Type Form</ModalHeader>
          <ModalBody>
            Are you sure you want to delete?
          </ModalBody>
          <ModalFooter>
            <Button color="danger" type='submit' disabled={loading} onClick={deleteType}>Delete</Button>
            <Button color="success" onClick={handleToggleDeleteModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
        
        <Modal isOpen={toggleEditMOdal} id="edit_type_modal">
          <ModalHeader toggle={handleToggleEditModal}>Edit Loan Type Form</ModalHeader>
          <Form onSubmit={handleSubmitEdit}>
            <ModalBody>
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
                        name='name'
                        value={updateInputs.name}
                        onChange={handleEditChange}
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
                        name='amount'
                        value={updateInputs.amount}
                        onChange={handleEditChange}
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
                        name='repayment_amount'
                        value={updateInputs.repayment_amount}
                        onChange={handleEditChange}
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
                        name='repayment_days'
                        value={updateInputs.repayment_days}
                        onChange={handleEditChange}
                        placeholder="e.g 15 days"
                        type="text"
                      />

                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="success" type="submit" disabled={loading}>Submit</Button>
              <Button color="danger" onClick={handleToggleEditModal}>Cancel</Button>
            </ModalFooter>
          </Form>
        </Modal>

        <Modal isOpen={toggleModal} id="add_type_modal">
          <ModalHeader toggle={toggleSignUpModal}>Add Loan Type Form</ModalHeader>
          <Form onSubmit={handleSubmit}>
            <ModalBody>
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
                        className={`form-control-alternative ${isEmpty(errors.data?.errors?.name) ? "" : "border border-danger"}`}
                        name='name'
                        value={Inputs.name}
                        onChange={handleChange}
                        placeholder="e.g student loan"
                        type="text"
                      />  
                      <div className="text-danger text-sm">
                        {
                          isEmpty(errors?.data?.errors?.name) ? null : errors?.data?.errors?.name
                        }
                      </div>                
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
                        className={`form-control-alternative ${isEmpty(errors.data?.errors?.amount) ? "" : "border border-danger"}`}
                        name='amount'
                        value={Inputs.amount}
                        onChange={handleChange}
                        placeholder="e.g 15,000"
                        type="number"
                      />
                      <div className="text-danger text-sm">
                        {
                          isEmpty(errors?.data?.errors?.amount) ? null : errors?.data?.errors?.amount
                        }
                      </div>
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
                        className={`form-control-alternative ${isEmpty(errors.data?.errors?.repayment_amount) ? "" : "border border-danger"}`}
                        name='repayment_amount'
                        value={Inputs.repayment_amount}
                        onChange={handleChange}
                        placeholder="e.g 15,500"
                        type="text"
                      />
                      <div className="text-danger text-sm">
                        {
                          isEmpty(errors?.data?.errors?.repayment_amount) ? null : errors?.data?.errors?.repayment_amount
                        }
                      </div>
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
                        className={`form-control-alternative ${isEmpty(errors.data?.errors?.repayment_days) ? "" : "border border-danger"}`}
                        name='repayment_days'
                        value={Inputs.repayment_days}
                        onChange={handleChange}
                        placeholder="e.g 15 days"
                        type="text"
                      />
                      <div className="text-danger text-sm">
                        {
                          isEmpty(errors?.data?.errors?.repayment_days) ? null : errors?.data?.errors?.repayment_days
                        }
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="success" type="submit" disabled={loading}>Submit</Button>
              <Button color="danger" onClick={toggleSignUpModal}>Cancel</Button>
            </ModalFooter>
          </Form>
        </Modal>

        <Container className="mt-4" fluid>
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Loan Types</h3>
                </CardHeader>
                {loading ? (<Spinner className='m-auto' style={{ width:"4rem", height:"4rem", 
                    marginLeft:"20rem !important" }} />) 
                    : loanTypeData ? (
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Loan Name</th>
                        <th scope="col">Loan Amount</th>
                        <th scope="col">Repayment Amount</th>
                        <th scope="col">Repayment Days</th>
                        {/* <th scope="col">Date Created</th> */}
                        <th scope="col">Actions</th>
                        <th scope="col" />
                      </tr>
                    </thead>                 
                      <tbody>
                        {loanTypeData?.map((type, index) => (
                          <tr key={type.id}>
                            <th scope="row">{ index + 1 }</th>
                            <th scope="row">
                              <Media className="align-items-center">
                                <span className="mb-0 text-sm">
                                  { type?.name }
                                </span>
                              </Media>
                            </th>
                            <td>{ type?.amount }</td>
                            <td>{ type?.repayment_amount }</td>
                            <td>{ type?.repayment_days } days</td>
                            {/* <td>
                              {new Date(type?.created_at).toLocaleDateString("en-us", {
                                month:'long', day:'2-digit', year:'numeric' 
                              })}
                            </td> */}
                            <td>
                              <div className="d-flex align-items-center">
                                <button onClick={(e) => handleToggleEditModal(type?.id, e)} style={{ border:"1px solid white"}}>    
                                  <i class="fas fa-edit"></i>
                                </button>
                                <button onClick={(e) => handleToggleDeleteModal(type?.id, e)} style={{ border:"1px solid white"}}>
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                  </Table>
                ) : (<div className='m-auto'>No content to display</div>) }
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
