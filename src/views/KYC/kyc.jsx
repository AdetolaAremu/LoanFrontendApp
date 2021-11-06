import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import process from 'env.js';
import { notify } from 'utils/notification';
import { createKYCApplication } from "./actions/action";
import Header from "components/Headers/Header.js";
import {
  Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Container, Row, Col,
} from "reactstrap";

const initialState = {
  country_id:"", state_id:"", city:"", address:"", identification_type:"",
  id_number:"", nok_first_name:"", nok_last_name:"", nok_middle_name:"",
  nok_email:"", nok_phone:"", nok_country_id:"", nok_state_id:"", nok_city:"", nok_address:""
}

const service_url = process.env.SERVICE_URL

const KYC = () => {

  const [Inputs, setInputs] = useState(initialState);
  const [states, setstates] = useState([]);
  const [nokState, setnokState] = useState([])
  const [country, setcountry] = useState([]);

  const dispatch = useDispatch()

  const { kyc: { KYCData, KYCloading }, dashboard:{ data } } = useSelector(state => state)

  const handleChange = (e) => {
    if (e.target.name === 'country_id') {
      getState(e.target.value);
    }
    if (e.target.name === 'nok_country_id') {
      getNokState(e.target.value)
    }
    setInputs({...Inputs, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createKYCApplication(Inputs));
  }

  const makeCountryApiCall = async () => {
    const res = await axios.get(`${service_url}/countries`).then((res) => {
      setcountry(res.data);
    })
  }

  const getState = async (id) => {
    const res = await axios.get(`${service_url}/state/${id}`)
    setstates(res.data)
  }

  const getNokState = async (id) => {
    const res = await axios.get(`${service_url}/state/${id}`)
    setnokState(res.data)
  }

  useEffect(() => {
    makeCountryApiCall()
  }, [])

  return(
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container className="mt-4" fluid>
          <Row>
            <Col className="order-xl-1" xl="11">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">KYC APPLICATION</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Status
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  {console.log('data', data?.data?.kyc?.status)}
                  {data?.data?.kyc?.status === 'pending' ? (
                    <div>
                      <div>
                        <Row>
                          <Col>
                            <div>
                              <div>
                                <small className="font-italic">First name: </small> 
                                <span className="font-weight-bold">{ data?.data?.first_name }</span>
                              </div>
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <small className="font-italic">Last name: </small> 
                              <span className="font-weight-bold">{ data?.data?.last_name }</span>
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <small>Email: </small>
                              <span className="font-weight-bold">{ data?.data?.email }</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="mt-2">
                        <Row>
                          <Col>
                            <div>
                              <div>
                                <small className="font-italic">Phone number: </small> 
                                <span className="font-weight-bold">{ data?.data?.phone }</span>
                              </div>
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <small className="font-italic">Country: </small> 
                              <span className="font-weight-bold">{ data?.data?.kyc?.country_id }</span>
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <small>State: </small>
                              <span className="font-weight-bold">{ data?.data?.kyc?.state_id }</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="mt-2">
                        <Row>
                          <Col>
                            <div>
                              <div>
                                <small className="font-italic">City: </small> 
                                <span className="font-weight-bold">{ data?.data?.kyc?.city }</span>
                              </div>
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <small className="font-italic">Identification type: </small> 
                              <span className="font-weight-bold">{ data?.data?.kyc?.address }</span>
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <small>Identification type: </small>
                              <span className="font-weight-bold">{ data?.data?.kyc?.identification_type }</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="mt-2">
                        <hr className="my-1" />
                        <h6 className="heading-small text-muted mb-4 text-center">
                          Next of Kin Data
                        </h6>
                        <Row>
                          <Col>
                            <div>
                              <div>
                                <small className="font-italic">NOK First Name: </small> 
                                <span className="font-weight-bold">{ data?.data?.kyc?.nok_last_name }</span>
                              </div>
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <small className="font-italic">NOK Last Name: </small> 
                              <span className="font-weight-bold">{ data?.data?.kyc?.nok_first_name }</span>
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <small>NOK Email: </small>
                              <span className="font-weight-bold">{ data?.data?.kyc?.nok_email }</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="mt-2">
                        <Row>
                          <Col>
                            <div>
                              <div>
                                <small className="font-italic">NOK Phone: </small> 
                                <span className="font-weight-bold">{ data?.data?.kyc?.nok_phone }</span>
                              </div>
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <small className="font-italic">NOK Country: </small> 
                              <span className="font-weight-bold">{ data?.data?.kyc?.nok_country_id }</span>
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <small>NOK State: </small>
                              <span className="font-weight-bold">{ data?.data?.kyc?.nok_state_id }</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="mt-2">
                        <Row>
                          <Col>
                            <div>
                              <div>
                                <small className="font-italic">NOK City: </small> 
                                <span className="font-weight-bold">{ data?.data?.kyc?.nok_city }</span>
                              </div>
                            </div>
                          </Col>
                          <Col>
                            <div>
                              <small className="font-italic">NOK Address: </small> 
                              <span className="font-weight-bold">{ data?.data?.kyc?.nok_address }</span>
                            </div>
                          </Col>
                          <Col></Col>
                        </Row>
                      </div>
                    </div>
                    ):(
                      <Form onSubmit={handleSubmit}>
                        <h6 className="heading-small text-muted mb-4">
                          User information
                        </h6>
                        <div className="pl-lg-4">
                          {/* <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-first-name"
                                >
                                  First name
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue="Lucky"
                                  id="input-first-name"
                                  placeholder="First name"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-last-name"
                                >
                                  Last name
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue="Jesse"
                                  id="input-last-name"
                                  placeholder="Last name"
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
                                  htmlFor="input-phone"
                                >
                                  Phone Number
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue="09009998889"
                                  id="input-phone"
                                  placeholder="phone"
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
                                  Email address
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-email"
                                  placeholder="jesse@example.com"
                                  type="email"
                                />
                              </FormGroup>
                            </Col>
                          </Row> */}
                          <Row>
                            <Col lg="6">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-phone"
                                  >
                                    Identification Type
                                  </label>
                                  <Input
                                    className="form-control-alternative"
                                    placeholder="nin, bvn etc"
                                    name="identification_type"
                                    value={Inputs.identification_type}
                                    onChange={handleChange}
                                    type="text"
                                  />
                                </FormGroup>
                              </Col>
                              <Col lg="6">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="input-phone"
                                  >
                                    Identification Number
                                  </label>
                                  <Input
                                    className="form-control-alternative"
                                    name="id_number"
                                    value={Inputs.id_number}
                                    onChange={handleChange}
                                    placeholder="55959595857"
                                    type="text"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                        </div>
                        <hr className="my-4" />
                        {/* Address */}
                        <h6 className="heading-small text-muted mb-4">
                          Contact information
                        </h6>
                        <div className="pl-lg-4">
                          <Row>
                            <Col md="12">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-address"
                                >
                                  Address
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  name="address"
                                  value={Inputs.address}
                                  onChange={handleChange}
                                  placeholder="55 Walter street off lagos"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                >
                                  Country
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  name="country_id"
                                  value={Inputs.country_id}
                                  onChange={handleChange}
                                  placeholder="City"
                                  type="select"
                                >
                                  <option defaultValue>Choose country</option>
                                  {/* {console.log('country', country)} */}
                                  {country.map((count) => (
                                    <option key={count.id} value={count.id}>{ count.name }</option>
                                  ))}
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-country"
                                >
                                  State
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  name="state_id"
                                  value={Inputs.state_id}
                                  onChange={handleChange}
                                  placeholder="Lagos"
                                  type="select"
                                >
                                  <option defaultValue>Choose state</option>
                                  {states.map((item) => (
                                    <option key={item.id} value={item.id}>{ item.name }</option>
                                  ))}
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                >
                                  City
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  name="city"
                                  value={Inputs.city}
                                  onChange={handleChange}
                                  placeholder="Ibadan"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <hr className="my-4" />
                        {/* Description */}
                        <h6 className="heading-small text-muted mb-4">Next of Kin Contact Information</h6>
                        <div className="pl-lg-4">
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-last-name"
                                >
                                  NOK Last Name
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  name="nok_last_name"
                                  value={Inputs.nok_last_name}
                                  onChange={handleChange}
                                  placeholder="Last name"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                >
                                  NOK First Name
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  name="nok_first_name"
                                  value={Inputs.nok_first_name}
                                  onChange={handleChange}
                                  placeholder="First name"
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
                                  NOK Middle Name
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  name="nok_middle_name"
                                  value={Inputs.nok_middle_name}
                                  onChange={handleChange}
                                  placeholder="Middle name"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                >
                                  NOK Phone Number
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  name="nok_phone"
                                  value={Inputs.nok_phone}
                                  onChange={handleChange}
                                  placeholder="090887899987"
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
                                  NOK Email Address
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  name="nok_email"
                                  value={Inputs.nok_email}
                                  onChange={handleChange}
                                  placeholder="jesse@example.com"
                                  type="email"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <hr className="my-4" />
                        {/* Address */}
                        <h6 className="heading-small text-muted mb-4">
                          Next of Kin Contact information
                        </h6>
                        <div className="pl-lg-4">
                          <Row>
                            <Col md="12">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-address"
                                >
                                  NOK Address
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  name="nok_address"
                                  value={Inputs.nok_address}
                                  onChange={handleChange}
                                  placeholder="Home A"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-city"
                                >
                                  NOK Country
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  name="nok_country_id"
                                  value={Inputs.nok_country_id}
                                  onChange={handleChange}
                                  placeholder="City"
                                  type="select"
                                >
                                  <option defaultValue>Choose country</option>
                                  {country.map((count) => (
                                    <option key={count.id} value={count.id}>{ count.name }</option>
                                  ))}
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                >
                                  NOK State
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  name="nok_state_id"
                                  value={Inputs.nok_state_id}
                                  onChange={handleChange}
                                  type="select"
                                >
                                  <option defaultValue>Choose state</option>
                                  {nokState.map((item) => (
                                    <option key={item.id} value={item.id}>{ item.name }</option>
                                  ))}
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                >
                                  NOK City
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  name="nok_city"
                                  value={Inputs.nok_city}
                                  onChange={handleChange}
                                  placeholder="e.g Ibadan"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <div className="text-right">
                            <Button color="success" type="submit">Submit</Button>
                            <Button color="danger">Cancel</Button>
                          </div>
                        </div>
                      </Form>
                    )
                  }
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default KYC;