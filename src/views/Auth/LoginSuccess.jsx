import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, Col } from "reactstrap";

function LoginSuccess() {
  const history  = useHistory()

  useEffect(() => {
   setTimeout(() => {
     history.push('login')
   }, 5000);
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
              You will be redirected in 5 seconds.
            </div>
          </CardBody>
        </Card>
      </Col>      
    </>
  )
}

export default LoginSuccess
