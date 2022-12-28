
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from 'next/link';

function NavScrollExample() {
  return (
    <Navbar  expand="lg" className="wbg-main">
      <Container fluid>
        <Navbar.Brand href="#">
            <LazyLoadImage src="/images/logo.png"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link href="/our-approach" className="nav-link">Our Approach</Link>
            
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
            <Link href="/news-insights" className="nav-link">News & Insights</Link>
            <NavDropdown title="About Us" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action5">Company</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Team</NavDropdown.Item>
            </NavDropdown>
            
            <Link href="/contact-us" className="nav-link">Contact</Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;