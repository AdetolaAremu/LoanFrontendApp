import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RectSpinner } from "utils/loader/Loader";
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
  Button,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import { getRejectedKYC } from "./actions/action";

const KYCRejected = ()=> {
  const { applications: { adminKYCData } } = useSelector(state => state)
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getRejectedKYC());
  }, [])

 return(
   <>
    <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container className="mt-4" fluid>
            <Row>
              <div className="col">
                <Card className="shadow">
                  <CardHeader className="border-0">
                    <h3 className="mb-0">KYC Rejected Table</h3>
                  </CardHeader>
                  {!adminKYCData ? (<RectSpinner />) : adminKYCData.length ? (
                    <Table className="align-items-center table-flush" responsive>
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Request Type</th>
                          <th scope="col">KYC Status</th>
                          <th scope="col">Date Created</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                          {adminKYCData.map((failed) => (
                            <tr>
                              <th scope="row">
                                <Media className="align-items-center">
                                  <span className="mb-0 text-sm">
                                    { failed?.user?.first_name } { failed?.user?.last_name }
                                  </span>
                                </Media>
                              </th>
                              <td>KYC</td>
                              <td>
                                <Badge color="" className="badge-dot mr-4 text-capitalize">
                                  <i className="bg-warning" />
                                  { failed?.status }
                                </Badge>
                              </td>
                              <td>
                                {
                                  new Date(failed?.created_at).toLocaleDateString("en-us", {
                                    day:"2-digit", month:"2-digit", year:"numeric"
                                  })
                                }   
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <Link>
                                    <Button className="bg-gradient-primary text-white">
                                      Take Action
                                    </Button>
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </Table>
                   ) : (<div className='text-center'>No data to display</div>)}
                  <CardFooter className="py-4">
                    <nav aria-label="...">
                      <Pagination
                        className="pagination justify-content-end mb-0"
                        listClassName="justify-content-end mb-0"
                      >
                        <PaginationItem className="disabled">
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            tabIndex="-1"
                          >
                            <i className="fas fa-angle-left" />
                            <span className="sr-only">Previous</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem className="active">
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            2 <span className="sr-only">(current)</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            3
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-angle-right" />
                            <span className="sr-only">Next</span>
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </nav>
                  </CardFooter>
                </Card>
              </div>
            </Row>
        </Container>
    </div>
   </>
 ) 
}

export default KYCRejected