import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { countKYC, countLoan } from "./actions/action";
import {
  Card, Container, Row, CardBody, CardTitle, Col,
} from "reactstrap";
import ROUTES from "Routes/routes.json"
import { ToastContainer } from 'react-toastify';

function Applications() {

  const { applications: { adminKYCData, adminLoanData } } = useSelector(state => state)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(countKYC());
    dispatch(countLoan());
  }, [])

  return (
    <>
      <ToastContainer />
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <Link to="pending-loan">
                      <CardBody>
                        <Row>
                          <div className="col">
                            <CardTitle
                              tag="h5"
                              className="text-uppercase mb-3"
                            >
                              Pending Loan Applications
                            </CardTitle>
                            <span className="h2 font-weight-bold">
                              { adminLoanData?.Pending }
                            </span>
                          </div>
                          <Col className="col-auto mt-3">
                            <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                              <i class="fas fa-spinner" />
                            </div>
                          </Col>
                        </Row>
                        <p className="mt-1 mb-0 text-muted text-sm">
                          <span>Click to View</span>
                        </p>
                      </CardBody>
                    </Link>
                  </Card>
                </Col>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <Link to="approved-loan">
                      <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase mb-3"
                          >
                            Approved Loan Application
                          </CardTitle>
                          <span className="h2 font-weight-bold">{ adminLoanData?.Successful }</span>
                        </div>
                        <Col className="col-auto mt-3">
                          <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                            <i class="fas fa-check-circle" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-1 mb-0 text-muted text-sm">
                        <span>Click to View</span>
                      </p>
                      </CardBody>
                    </Link>
                  </Card>
                </Col>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <Link to="rejected-loan">
                      <CardBody>
                        <Row>
                          <div className="col">
                            <CardTitle
                              tag="h5"
                              className="text-uppercase mb-3"
                            >
                              Rejected Loan Applications
                            </CardTitle>
                            <span className="h2 font-weight-bold">{ adminLoanData?.Failed }</span>
                          </div>
                          <Col className="col-auto mt-3">
                            <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                              <i class="fas fa-exclamation-triangle" />
                            </div>
                          </Col>
                        </Row>
                        <p className="mt-1 mb-0 text-sm">
                          <span>Click to View</span>
                        </p>
                      </CardBody>
                    </Link>
                  </Card>
                </Col>
              </Row>
            </div>
        </Container>
        <Container fluid style={{ marginTop:"3.8rem" }}>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <Link to="pending-kyc">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase mb-3"
                          >
                            KYC Pending
                          </CardTitle>
                          <span className="h2 font-weight-bold">
                            { adminKYCData?.Pending }
                          </span>
                        </div>
                        <Col className="col-auto mt-3">
                          <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                            <i class="fas fa-spinner" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-1 mb-0 text-muted text-sm">
                        <span>Click to View</span>
                      </p>
                    </CardBody>
                  </Link>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <Link to="approved-kyc">
                    <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase mb-3"
                        >
                          KYC Approved
                        </CardTitle>
                        <span className="h2 font-weight-bold">{ adminKYCData?.Successful }</span>
                      </div>
                      <Col className="col-auto mt-3">
                        <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                          <i class="fas fa-check-circle" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-1 mb-0 text-muted text-sm">
                      <span>Click to View</span>
                    </p>
                    </CardBody>
                  </Link>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <Link to="rejected-kyc">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase mb-3"
                          >
                            KYC Rejected
                          </CardTitle>
                          <span className="h2 font-weight-bold">{ adminKYCData?.Failed }</span>
                        </div>
                        <Col className="col-auto mt-3">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i class="fas fa-exclamation-triangle" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-1 mb-0 text-sm">
                        <span>Click to View</span>
                      </p>
                    </CardBody>
                  </Link>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {/* <div className='mt-2'>
        
      </div> */}
    </>
  )
}

export default Applications
