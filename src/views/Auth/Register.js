
import React, {useState} from 'react';
import "../Auth/authStyles.css";
import {
  Button, Card, CardHeader, CardBody, FormGroup, Form,
  Input, InputGroupAddon, InputGroupText,InputGroup, Row, Col,
} from "reactstrap";
import { ToastContainer } from 'react-toastify';

const initialState = {
  first_name: "", last_name:"", email:"", phone:"", password:"", confirm_password:""
}

const Register = () => {
  const [Inputs, setInputs] = useState(initialState)

  const strength = (length) => {
    if(length < 3){
        return 'weak'
    }
    else if(length = 5){
      return 'good'
    }
    else if (length = 7) {
      return 'strong'
    }
  }

  const handleChange = (e) => {
    setInputs({...Inputs, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('inputs', Inputs)
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
                    type="text"
                    name='first_name'
                    onChange={handleChange}
                    value={Inputs.first_name} 
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input 
                    placeholder="Last name" 
                    type="text"
                    name='last_name'
                    onChange={handleChange}
                    value={Inputs.last_name} 
                  />
                </InputGroup>
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
                    type="email"
                    autoComplete="new-email"
                    name='email'
                    onChange={handleChange}
                    value={Inputs.email}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input 
                    placeholder="Phone number" 
                    type="text"
                    name='phone'
                    onChange={handleChange}
                    value={Inputs.phone} 
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    name='password'
                    onChange={handleChange}
                    value={Inputs.password} 
                  />
                </InputGroup>
                {/* <span className={`${strength(Inputs?.password?.length)}`}>
                  {
                    Inputs.password.length <= 0 ? "" : 
                    <small>strength</small>
                  }
                </span> */}
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    name='confirm_password'
                    onChange={handleChange}
                    value={Inputs.confirm_password} 
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-muted font-italic">
                <small className={`${strength(Inputs?.password?.length)}`}>
                
                  password strength
                  {/* <span className="text-success font-weight-700">strong</span> */}
                </small>
              </div>
              {/* <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        I agree with the{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                </Col>
              </Row> */}
              <div className="text-center">
                <Button className="mt-4" color="primary" type="submit">
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
