
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "components/Landing/Navbar"
import SimpleFooter from "components/Landing/SimpleFooter";
import classnames from "classnames";
import AOS from "aos";
import "aos/dist/aos.css";
import '../Auth/authStyles.css'

import {
  Badge,
  Button,
  Card,
  CardBody,
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
    AOS.init({
      // initialise with other settings
      duration : 2000
    });
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
            <div className="col px-0f text-center topinlanding" style={{ marginTop:"7rem" }}>
              <h1 className="display-3 mt-5 text-white">
               With Loaney, you will get the best loan plans <br /> with little interest rate..
              </h1>
              <p className="lead text-white">
                We offer the least and the best interest rate <br/>
                Register, get your KYC approved in minutes <br/>
                It is free, fast and affordable
              </p>
              <div className="btn-wrapper" data-aos="fade-left">
                <Button
                  className="btn-icon mb-3 mb-sm-0"
                  color="info"
                  tag={Link}
                  to="auth/register"
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
                  // style={{height:"30rem", width:"100%"}}
                  alt="..."
                  className="img-fluid floating"
                  src={require("assets/img/brand/screely-1637956621078.png").default}
                />
              </Col>
              <Col className="order-md-1" md="6" data-aos="fade-right">
                <div className="pr-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                    <i className="ni ni-settings-gear-65" />
                  </div>
                  <h3>Awesome features</h3>
                  <p>
                    You will get awesome and breathtaking loans offers
                    which are not only unbeatable but the best of both worlds.
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
                <h2 className="display-3 text-white">Why you should choose us</h2>
                <p className="lead text-white">
                  We are ranked no. 1 by the CBN on loan performance index,
                  which means we give the lowest best loan with the lowest
                  interest in the country.
                </p>
              </Col>
            </Row>
            <Row className="row-grid mt-5">
              <Col lg="4" data-aos="fade-right">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-settings text-primary" />
                </div>
                <h5 className="text-white mt-3">Low Interest Loan</h5>
                <p className="text-white mt-3">
                  We offer low interest loans that will give you peace of mind
                  and make sure you are not under pressure.
                </p>
              </Col>
              <Col lg="4">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-ruler-pencil text-primary" />
                </div>
                <h5 className="text-white mt-3">We don't bully</h5>
                <p className="text-white mt-3">
                  Lots of loan sharks bully you into paying back your loan,
                  but we do not engage in such activities.
                </p>
              </Col>
              <Col lg="4" data-aos="fade-left">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-atom text-primary" />
                </div>
                <h5 className="text-white mt-3">24/7 Customer Support</h5>
                <p className="text-white mt-3">
                  Our customer support team are always ready to listen to your plight.
                  Do not hesitate to drop a message when you feel the need to.
                </p>
              </Col>
            </Row>
          </Container>
        
        </section>

        <section className="section section-lg pt-lg-0 section-contact-us">
          <Container>
            <Row className="justify-content-center mt--300" data-aos="fade-up">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1">Have questions?</h4>
                    <p className="mt-0">
                      Please contact us by filling the form below.
                    </p>
                    <FormGroup
                      className={classnames("mt-5", {
                        focused: this.state.nameFocused
                      })}
                    >
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Your name"
                          type="text"
                          onFocus={e => this.setState({ nameFocused: true })}
                          onBlur={e => this.setState({ nameFocused: false })}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup
                      className={classnames({
                        focused: this.state.emailFocused
                      })}
                    >
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email address"
                          type="email"
                          onFocus={e => this.setState({ emailFocused: true })}
                          onBlur={e => this.setState({ emailFocused: false })}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Input
                        className="form-control-alternative"
                        cols="80"
                        name="name"
                        placeholder="Type a message..."
                        rows="4"
                        type="textarea"
                      />
                    </FormGroup>
                    <div>
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="button"
                      >
                        Send Message
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        

        <section className="section section-lg pt-0 mb-5 mt-5">
          <Container>
            <Card className="bg-gradient-warning shadow-lg border-0 bottomlanding" style={{ height:"15rem" }}>
              <div className="p-5">
                <Row className="">
                  <Col lg="8">
                    <h2 className="text-white">
                      We are available on smartphones.
                    </h2>
                    <p className="lead text-white mt-3">
                      You can download our application from either iphone
                      store or playstore. The application is smooth and 
                      we assure you that the experience will be mind blowing.
                    </p>
                  </Col>
                  <Col className="ml-lg-auto" lg="3">
                    <div>
                      <img
                        data-aos="flip-left"
                        className=""
                        width={200}
                        alt="..."
                        src={require("assets/img/brand/iphone.png").default}
                      />
                    </div>
                    <div style={{ marginTop:"-4.3rem" }}>
                      <img
                        data-aos="zoom-in-up"
                        width={200}
                        alt="..."
                        src={require("assets/img/brand/playstore1.png").default}
                      />
                    </div>
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
