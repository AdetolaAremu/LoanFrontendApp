import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, CardHeader, CardBody, Table, Container, 
  Row, Col, CardTitle, Badge, ModalBody, ModalFooter, Modal, ModalHeader } from "reactstrap";
import { allUsersCount, dashboardCount, lastFiveUsers } from "../views/DashbordActions/action";
import { getTypeLoanData } from "./LoanType/actions/action";
import { DashboardTopLoader } from "utils/MyLoader";

const Index = (props) => {
  const [toggleUsers, settoggleUsers] = useState(false)

  const { mainStats: { adminStats, allUsersStats, lastfiveUsers, adminDataLoading }, 
    loanType: { loanTypeData } } = useSelector(state => state)


  const toggleUsersModal = () => {
    settoggleUsers(!toggleUsers)
    dispatch(allUsersCount())
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dashboardCount())
    dispatch(getTypeLoanData())
    dispatch(lastFiveUsers())
  }, [])

  return (
    <div className="header pb-5 bg-gradient-info">
      {adminDataLoading ? (<DashboardTopLoader />) : (
        <div className="mb-2">
          <div className="pb-8 pt-5 pt-md-8">
            <Container fluid>
              <div className="header-body">
                <Row>
                  <Col lg="6" xl="3">
                    <Card className="card-stats mb-4 mb-xl-0">
                      <CardBody>
                        <Row>
                          <div className="col">
                            <CardTitle
                              tag="h5"
                              className="text-uppercase text-muted mb-0"
                            >
                              Total Users Count
                            </CardTitle>
                            <span className="h2 font-weight-bold mb-0">{ adminStats?.Users }</span>
                          </div>
                          <Col className="col-auto">
                            <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                              <i className="fas fa-users" />
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="6" xl="3">
                    <Card className="card-stats mb-4 mb-xl-0">
                      <CardBody>
                        <Row>
                          <div className="col">
                            <CardTitle
                              tag="h5"
                              className="text-uppercase text-muted mb-0"
                            >
                              Active Loans Count
                            </CardTitle>
                            <span className="h2 font-weight-bold mb-0">
                              { adminStats?.LoanCount }
                            </span>
                          </div>
                          <Col className="col-auto">
                            <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                              <i className="fas fa-chart-bar" />
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="6" xl="3">
                    <Card className="card-stats mb-4 mb-xl-0">
                      <CardBody>
                        <Row>
                          <div className="col">
                            <CardTitle
                              tag="h5"
                              className="text-uppercase text-muted mb-0"
                            >
                              Daily Loan Count
                            </CardTitle>
                            <span className="h2 font-weight-bold mb-0">{ adminStats?.dailyLoanCount }</span>
                          </div>
                          <Col className="col-auto">
                            <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                              <i className="fas fa-percent" />
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="6" xl="3">
                    <Card className="card-stats mb-4 mb-xl-0">
                      <CardBody>
                        <Row>
                          <div className="col">
                            <CardTitle
                              tag="h5"
                              className="text-uppercase text-muted mb-0"
                            >
                              All Loans Count
                            </CardTitle>
                            <span className="h2 font-weight-bold mb-0">{ adminStats?.allLoans }</span>
                          </div>
                          <Col className="col-auto">
                            <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                              <i className="fas fa-chart-pie " />
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>

          <Container className="mt--7" fluid>
            <Row className="mt-5">
              <Col className="mb-5 mb-xl-0" xl="8">
                <Card className="shadow">
                  <CardHeader className="border-0">
                    <Row className="align-items-center">
                      <div className="col">
                        <h3 className="mb-0">Last Five Registered Users</h3>
                      </div>
                      <div className="col text-right">
                        <Button
                          color="primary"
                          href="#pablo"
                          onClick={toggleUsersModal}
                          size="sm"
                        >
                          See all
                        </Button>
                      </div>
                    </Row>
                  </CardHeader>
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">KYC Status</th>
                        <th scope="col">Date Registered</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lastfiveUsers?.map((last) => (
                        <tr>
                        <th scope="row">{ last?.first_name } { last?.last_name }</th>
                        <td>{ last.email }</td>
                        <td>
                          { last?.kyc === null ? (<div>Not Applied</div>) : last?.kyc?.status === 'pending' ? 
                            (<div>
                              <Badge color="" className="badge-dot mr-4 text-capitalize">
                              <i className="bg-warning" />Pending</Badge>
                            </div>) : last?.kyc?.status === 'failed' ? (<div><Badge color="" className="badge-dot mr-4 text-capitalize">
                              <i className="bg-warning" />Failed</Badge></div>) :
                            last?.kyc?.status === 'successful' ? (<div>Verified</div>) : ""
                          }
                        </td>
                        <td>
                          { new Date(last?.created_at).toLocaleDateString("en-us", { "day":"2-digit",
                            "month":"2-digit", "year":"numeric" 
                          }) }
                        </td>
                      </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card>
              </Col>
              <Col xl="4" className="mb-2">
                <Card className="shadow">
                  <CardHeader className="border-0">
                    <Row className="align-items-center">
                      <div className="col">
                        <h3 className="mb-0">Loan Types</h3>
                      </div>
                    </Row>
                  </CardHeader>
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">               
                      <tr>
                        <th scope="col">Type</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Loans Count</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loanTypeData.map((type) => (
                        <tr key={type.id}>
                          <th scope="row">{ type?.name }</th>
                          <td>{ type?.amount }</td>
                          <td>{ type?.loan_application_count }</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      )}
      <Modal isOpen={toggleUsers} size="lg">
        <ModalHeader toggle={toggleUsersModal}>All Users</ModalHeader>
        <ModalBody>
          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">KYC Status</th>
                <th scope="col">Date Registered</th>
              </tr>
            </thead>
            <tbody>
              {allUsersStats?.map((all, index) => (
                <tr key={all.id}>
                  <th scope="row">{ index + 1 }</th>
                  <th scope="row">{ all?.first_name } { all?.last_name }</th>
                  <td>{ all.email }</td>
                  <td>
                    { all?.kyc === null ? (<div>Not Applied</div>) : all?.kyc?.status === 'pending' ? 
                      (<div>
                          <Badge color="" className="badge-dot mr-4 text-capitalize">
                        <i className="bg-warning" />Pending</Badge>
                      </div>) : all?.kyc?.status === 'failed' ? (<div><Badge color="" className="badge-dot mr-4 text-capitalize">
                        <i className="bg-warning" />Failed</Badge></div>) :
                      all?.kyc?.status === 'successful' ? (<div>Verified</div>) : ""
                    }
                  </td>
                  <td>
                    { new Date(all?.created_at).toLocaleDateString("en-us", { "day":"2-digit",
                      "month":"2-digit", "year":"numeric" 
                    }) }
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggleUsersModal}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Index;
