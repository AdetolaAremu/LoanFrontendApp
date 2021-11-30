
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "../Auth/authStyles.css";
import {
  Button, Card, CardBody, FormGroup, Form, Input, InputGroupAddon, InputGroupText,InputGroup, Col,
} from "reactstrap";
import { ToastContainer } from 'react-toastify';
import isEmpty from 'utils/isEmpty';
import { registerNewUser } from './actions/actions';

const initialState = {
  first_name: "", last_name:"", email:"", phone:"", password:"", confirm_password:""
}

const Register = () => {
  const [Inputs, setInputs] = useState(initialState)

  const { allAuths: { authLoading, errors } } = useSelector(state => state)
  
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInputs({...Inputs, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registerNewUser(Inputs))
  }

  return (
    <>
      <ToastContainer />
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign up with the requested credentials</small>
            </div>
            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input 
                    placeholder="First name"
                    className={`form-control-alternative ${isEmpty(errors.data?.errors?.first_name) ? "" : "border border-danger"}`}
                    type="text"
                    name='first_name'
                    onChange={handleChange}
                    value={Inputs.first_name} 
                  />
                </InputGroup>
                <div className="text-danger text-sm">
                  {
                    isEmpty(errors?.data?.errors?.first_name) ? null : errors?.data?.errors?.first_name
                  }
                </div>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input 
                     className={`form-control-alternative ${isEmpty(errors.data?.errors?.last_name) ? "" : "border border-danger"}`}
                    placeholder="Last name" 
                    type="text"
                    name='last_name'
                    onChange={handleChange}
                    value={Inputs.last_name} 
                  />
                </InputGroup>
                <div className="text-danger text-sm">
                  {
                    isEmpty(errors?.data?.errors?.last_name) ? null : errors?.data?.errors?.last_name
                  }
                </div>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    className={`form-control-alternative ${isEmpty(errors.data?.errors?.email) ? "" : "border border-danger"}`}
                    type="email"
                    autoComplete="new-email"
                    name='email'
                    onChange={handleChange}
                    value={Inputs.email}
                  />
                </InputGroup>
                <div className="text-danger text-sm">
                  {
                    isEmpty(errors?.data?.errors?.email) ? null : errors?.data?.errors?.email
                  }
                </div>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input 
                    className={`form-control-alternative ${isEmpty(errors.data?.errors?.phone) ? "" : "border border-danger"}`}
                    placeholder="Phone number"
                    type="text"
                    name='phone'
                    onChange={handleChange}
                    value={Inputs.phone} 
                  />
                </InputGroup>
                <div className="text-danger text-sm">
                  {
                    isEmpty(errors?.data?.errors?.phone) ? null : errors?.data?.errors?.phone
                  }
                </div>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                     className={`form-control-alternative ${isEmpty(errors.data?.errors?.password) ? "" : "border border-danger"}`}
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    name='password'
                    onChange={handleChange}
                    value={Inputs.password} 
                  />
                </InputGroup>
                <div className="text-danger text-sm">
                  {
                    isEmpty(errors?.data?.errors?.password) ? null : errors?.data?.errors?.password
                  }
                </div>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    className={`form-control-alternative ${isEmpty(errors.data?.errors?.confirm_password) ? "" : "border border-danger"}`}
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    name='confirm_password'
                    onChange={handleChange}
                    value={Inputs.confirm_password} 
                  />
                </InputGroup>
                <div className="text-danger text-sm">
                  {
                    isEmpty(errors?.data?.errors?.confirm_password) ? null : errors?.data?.errors?.confirm_password
                  }
                </div>
              </FormGroup>
              <div className="text-center">
                <Button className="mt-4" disabled={authLoading} color="primary" type="submit">
                  Create account
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
