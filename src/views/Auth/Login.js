
import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardBody, FormGroup, Form,
  Input, InputGroupAddon, InputGroupText,InputGroup, Col } from "reactstrap";
import { loginUser } from './actions/actions';
import { ToastContainer } from 'react-toastify';
import isEmpty from 'utils/isEmpty';

const initialState = {
  "email":'',
  "password":''
}

const Login = () => {
  const { allAuths: { authLoading, errors } } = useSelector(state => state)

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
              <FormGroup className="">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    className={`form-control-alternative ${isEmpty(errors.data?.errors?.email) ? "" : "border border-danger"}`}
                    placeholder="Email"
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
                    name='password'
                    autoComplete="new-password"
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
              <div className="text-center">
                <Button className="" color="primary" type="submit" disabled={authLoading}>
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
