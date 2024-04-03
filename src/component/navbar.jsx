import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import profileImg from '../asset/profile.jpg';
import { Image } from 'react-bootstrap';
import '../style.css'; // Import your CSS file

function ResponsiveAppBar() {
  return (
    <Navbar className="navbar fixed-top" expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} className="nav-link" to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} className="nav-link" to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} className="nav-link" to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} className="nav-link" to="/project">
              Portofolio
            </Nav.Link>
            <Nav.Link as={Link} className="nav-link" to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <div className="nav-info">
            <span style={{ marginLeft: '12px' }}>Ahmed Naga</span>
            <Image src={profileImg} style={{ width: '50px', height: '50px', marginLeft: '12px' }} roundedCircle alt="" className="profileImg" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponsiveAppBar;
