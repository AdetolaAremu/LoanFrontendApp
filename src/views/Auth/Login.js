
import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getData } from 'views/Landing/actions/actions';
import {
  Button, Card, CardHeader, CardBody, FormGroup, Form,
  Input, InputGroupAddon, InputGroupText,InputGroup, Row,Col,
} from "reactstrap";
import { loginUser } from './actions/actions';
import { ToastContainer } from 'react-toastify';

const initialState = {
  "email":'',
  "password":''
}

const Login = () => {
  const { allAuths: { authLoading } } = useSelector(state => state)

  const dispatch = useDispatch()

  const [Inputs, setInputs] = useState(initialState)

  const handleChange = (e) => {
    setInputs({...Inputs, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(Inputs));
  }

  return (
    <>
      <ToastContainer />
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Please sign in with your credentials</small>
            </div>
            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
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
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    name='password'
                    autoComplete="new-password"
                    onChange={handleChange}
                    value={Inputs.password}
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit" disabled={authLoading}>
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        
      </Col>
    </>
  );
};

export default Login;
