import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import { connect } from "react-redux";
import {
  Button, UncontrolledCollapse, DropdownMenu, DropdownItem, DropdownToggle,
  UncontrolledDropdown, Media, NavbarBrand, Navbar, NavItem, NavLink,
  Nav, Container, Row, Col, UncontrolledTooltip
} from "reactstrap";
import { useSelector } from "react-redux";

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
            className="navbar-main navbar-transparent navbar-white headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <Link to="/">
                <span className="navbar-brand-img">
                  <img
                    height={60}
                    alt="..."
                    src={require("assets/img/brand/default.png").default}
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
                          src={require("assets/img/brand/argon-react.png")}
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
                      href="https://github.com/creativetimofficial/argon-design-system-react"
                      id="tooltip112445449"
                      target="_blank"
                    >
                      <i className="fab fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      See Github code
                    </UncontrolledTooltip>
                  </NavItem>
                  { allAuths.isAuthenticated === true ? (
                    <NavItem className="d-none d-lg-block ml-lg-4">
                      <Link to="admin/index">
                        <Button
                          className="btn-neutral btn-icon"
                          color="default"
                        >
                          {/* <span className="btn-inner--icon">
                            <i className="fa fa-cloud-download mr-2" />
                          </span> */}
                          
                            <span className="nav-link-inner--text ml-1">
                              Dashboard
                            </span>
                        </Button>
                      </Link>
                    </NavItem>
                    ):(
                      <NavItem className="d-none d-lg-block ml-lg-4">
                      <Button
                        className="btn-neutral btn-icon"
                        color="default"
                      >
                        {/* <span className="btn-inner--icon">
                          <i className="fa fa-cloud-download mr-2" />
                        </span> */}
                        <Link to="/auth/login">
                          <span className="nav-link-inner--text ml-1">
                            Login
                          </span>
                        </Link>
                      </Button>
                      <Link to="/auth/register">
                        <Button
                          className="btn-neutral btn-icon"
                          color="default"
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
