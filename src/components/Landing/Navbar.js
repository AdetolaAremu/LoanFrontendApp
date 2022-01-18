import React from "react";
import { Link } from "react-router-dom";
import Headroom from "headroom.js";
import { connect } from "react-redux";
import {
  Button, UncontrolledCollapse, Navbar, NavItem, NavLink, Nav, Container, Row, Col, UncontrolledTooltip
} from "reactstrap";
class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }

  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    const { allAuths } = this.props;
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <Link to="/">
                <span className="navbar-brand-img">
                  <img
                    height={60}
                    alt="..."
                    src={require("assets/img/brand/default.jpg").default}
                  />
                </span>
              </Link>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/default.jpg").default}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://github.com/AdetolaAremu"
                      id="tooltip112445449"
                      target="_blank"
                    >
                      <i className="fab fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      My Github page
                    </UncontrolledTooltip>
                  </NavItem>
                  { allAuths.isAuthenticated === true ? (
                    <NavItem className="d-none d-lg-block ml-lg-4">
                      <Link to="admin/loan-application">
                        <Button
                          className="btn-neutral btn-icon"
                          style={{backgroundColor:"#f7f8fa"}}
                        >
                          <span className="nav-link-inner--text ml-1">
                            Loans
                          </span>
                        </Button>
                      </Link>
                    </NavItem>
                    ):(
                      <NavItem className="d-none d-lg-block ml-lg-4">
                        <Link to="/auth/login" className="mx-2">
                          <Button
                            className="btn-neutral btn-icon"
                            style={{backgroundColor:"#f7f8fa"}}
                          >
                            {/* <span className="btn-inner--icon">
                              <i className="fa fa-cloud-download mr-2" />
                            </span> */}
                              <span className="nav-link-inner--text ml-1">
                                Login
                              </span>
                          </Button>
                        </Link>
                        <Link to="/auth/register">
                          <Button
                            className="btn-neutral btn-icon"
                            style={{backgroundColor:"#f7f8fa"}}
                          >
                            {/* <span className="btn-inner--icon">
                              <i className="fa fa-cloud-download mr-2" />
                            </span> */}
                            
                              <span className="nav-link-inner--text ml-1">
                                Register
                              </span>
                          </Button>
                        </Link>
                      </NavItem>
                    )
                  }
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

const mapStateToProps = ({ allAuths }) => ({
  allAuths,
});

export default connect(mapStateToProps)(DemoNavbar);
