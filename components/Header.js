import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
            <img src="/images/logo.png"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Our Approach</Nav.Link>
            
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action5">Ship Management</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Crew Management</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Ship Agency & Logistics</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Inspection</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Commercial Services</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="#action2">Fleet</Nav.Link>
            <Nav.Link href="#action2">Careers</Nav.Link>
            <Nav.Link href="#action2">News & Insights</Nav.Link>
            <NavDropdown title="About Us" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action5">Company</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Team</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Contact</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;