import React from 'react'
import { Link } from 'react-router-dom';
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  Button,
  CardBody, CardTitle, Col,
} from "reactstrap";
import Header from "components/Headers/Header.js";

function Applications() {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <Link to="/">
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
                              350,897
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
                    <Link to="/">
                      <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase mb-3"
                          >
                            Approved Loan Application
                          </CardTitle>
                          <span className="h2 font-weight-bold">2,356</span>
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
                    <Link to="/">
                      <CardBody>
                        <Row>
                          <div className="col">
                            <CardTitle
                              tag="h5"
                              className="text-uppercase mb-3"
                            >
                              Rejected Loan Applications
                            </CardTitle>
                            <span className="h2 font-weight-bold">924</span>
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
      <div className='mt-2'>
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0 bg-light">
                  <Link to="/admin/kyc/Pending">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase mb-3"
                          >
                            Pending KYCs
                          </CardTitle>
                          <span className="h2 font-weight-bold">
                            350,897
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
                <Card className="card-stats mb-4 mb-xl-0 bg-light">
                  <Link to="/">
                    <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase mb-3"
                        >
                        Approved KYCs
                        </CardTitle>
                        <span className="h2 font-weight-bold">2,356</span>
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
                <Card className="card-stats mb-4 mb-xl-0 bg-light">
                  <Link to="/">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase mb-3"
                          >
                            Rejected KYCs
                          </CardTitle>
                          <span className="h2 font-weight-bold">924</span>
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
    </>
  )
}

export default Applications
