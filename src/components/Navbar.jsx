import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownItemTags from "./LanDropdown";
import menuIcon from "../assets/image/hamburger-menu-icon.svg";

function NavbarSection() {
  return (
    <div className="banner_image">
      {/* <img src="image/HeroBanner.png" alt="" className="banner_image" /> */}
      <Container className="nav-bar">
        <Row>
          <Col sm={6}>
            <Row>
              <Col sm={5}>
                <div className="nav-logo">
                  <span className="logo-name">Company Logo</span>
                </div>
              </Col>
              <Col sm={1}>
                <DropdownItemTags />
              </Col>
            </Row>
          </Col>
          <Col sm={5} className="hamburger-menu">
            <Row>
              <Col sm={4} className="hamburger-list">
                About Us
              </Col>
              <Col sm={4} className="hamburger-list">
                Features
              </Col>
              <Col sm={4} className="hamburger-list">
                Contact
              </Col>
            </Row>
          </Col>
          <Col sm={1}>
            <Row>
              <Col sm={10} className="hamburger-icon">
                <img src={menuIcon} alt="" className="menu-icon"/>
              </Col>
            </Row>
          </Col>
        </Row>
        <Container className="heading">
          <Row className="bannar-title">
            <Col sm={6}>Welcome to</Col>
          </Row>
          <Row className="bannar-title">
            <Col sm={6}>Our company...</Col>
          </Row>
          <Row className="bannar-description">
            <Col sm={6}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam{" "}
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default NavbarSection;
