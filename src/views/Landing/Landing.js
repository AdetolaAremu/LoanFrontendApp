
import React from "react";
import Navbar from "components/Landing/Navbar"
import SimpleFooter from "components/Landing/SimpleFooter";
import promo from "assets/img/theme/promo-1.png"
import image1 from "assets/img/theme/img-1-1200x1000.jpg"
import classnames from "classnames";
import Download from "IndexSections/Download";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {

    const mystyle={
      background: 'linear-gradient(150deg, #281483 15%, #8f6ed5 70%, #d782d9 94%)',
      height:"40rem"
    }

    return (
      <>
        <Navbar />
        <main ref="main">
    
        <div className="" style={mystyle}>
          
          <Container className="py-lg-md d-flex">
            <div className="col px-0f text-center" style={{ marginTop:"7rem" }}>
              <h1 className="display-3 mt-5 text-white">
               With Loaney, you will get the best loan plans <br /> with little interest rate..
              </h1>
              <p className="lead text-white">
                We offer the least and the best interest rate <br/>
                Register, get your KYC approved in minutes <br/>
                It is free, fast and affordable
              </p>
              <div className="btn-wrapper">
                <Button
                  className="btn-icon mb-3 mb-sm-0"
                  color="info"
                  href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="fa fa-code" />
                  </span>
                  <span className="btn-inner--text">Get Started</span>
                </Button>
              </div>
            </div>
          </Container>
        </div>

        <section className="my-5">
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-md-2" md="6">
                <img
                  style={{height:"30rem"}}
                  alt="..."
                  className="img-fluid floating"
                  src={require("assets/img/brand/screely-1637956621078.png").default}
                />
              </Col>
              <Col className="order-md-1" md="6">
                <div className="pr-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                    <i className="ni ni-settings-gear-65" />
                  </div>
                  <h3>Awesome features</h3>
                  <p>
                    You will get awesome and breathtaking loans offers
                    which are not only unbeatable but the best of both worlds/.
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge
                            className="badge-circle mr-3"
                            color="success"
                          >
                            <i className="ni ni-settings-gear-65" />
                          </Badge>
                        </div>
                        <div>
                          <h5 className="mb-0">
                            KYC verification in few minutes
                          </h5>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge
                            className="badge-circle mr-3"
                            color="success"
                          >
                            <i className="ni ni-html5" />
                          </Badge>
                        </div>
                        <div>
                          <h5 className="mb-0">Amazing interface</h5>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge
                            className="badge-circle mr-3"
                            color="success"
                          >
                            <i className="ni ni-satisfied" />
                          </Badge>
                        </div>
                        <div>
                          <h5 className="mb-0">
                            Super friendly support team
                          </h5>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="bg-gradient-default pt-1">
          <Container className="pt-lg pb-300">
            <Row className="text-center justify-content-center">
              <Col lg="10">
                <h2 className="display-3 text-white">Build something</h2>
                <p className="lead text-white">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record low maximum sea ice extent tihs year down
                  to low ice.
                </p>
              </Col>
            </Row>
            <Row className="row-grid mt-5">
              <Col lg="4">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-settings text-primary" />
                </div>
                <h5 className="text-white mt-3">Building tools</h5>
                <p className="text-white mt-3">
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
              </Col>
              <Col lg="4">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-ruler-pencil text-primary" />
                </div>
                <h5 className="text-white mt-3">Grow your market</h5>
                <p className="text-white mt-3">
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
              </Col>
              <Col lg="4">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-atom text-primary" />
                </div>
                <h5 className="text-white mt-3">Launch time</h5>
                <p className="text-white mt-3">
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
              </Col>
            </Row>
          </Container>
           
        </section>

        <section className="section section-lg pt-0 mb-5 mt-5">
          <Container>
            <Card className="bg-gradient-warning shadow-lg border-0">
              <div className="p-5">
                <Row className="align-items-center">
                  <Col lg="8">
                    <h3 className="text-white">
                      We made website building easier for you.
                    </h3>
                    <p className="lead text-white mt-3">
                      I will be the leader of a company that ends up being
                      worth billions of dollars, because I got the answers. I
                      understand culture.
                    </p>
                  </Col>
                  <Col className="ml-lg-auto" lg="3">
                    <Button
                      block
                      className="btn-white"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                      size="lg"
                    >
                      Download React
                    </Button>
                  </Col>
                </Row>
              </div>
            </Card>
          </Container>
        </section>

        

        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
