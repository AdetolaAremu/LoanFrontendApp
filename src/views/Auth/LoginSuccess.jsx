import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Card, CardBody, FormGroup, Form,
  Input, InputGroupAddon, InputGroupText,InputGroup, Row, Col } from "reactstrap";

function LoginSuccess() {
  const history  = useHistory()

  useEffect(() => {
   setTimeout(() => {
     history.push('login')
   }, 10000);
  }, [])

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5 text-center">
            <div>
              Congratulations! <span className='font-weight-bold'>Your registration is successful</span>.
            </div>
            <div className='mt-4'>
              You will be redirected in 10 seconds. If you can not wait, please click the button below
            </div>
            <div className='mt-4'>
              <Button tag={Link} to="login" className='btn btn-info'>Take me to Login Page</Button>
            </div>
          </CardBody>
        </Card>
      </Col>      
    </>
  )
}

export default LoginSuccess
