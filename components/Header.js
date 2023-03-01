
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from 'next/link';
import { useRouter } from "next/router";

function NavScrollExample() {
  const router = useRouter();
  return (
    <Navbar  expand="lg" className="wbg-main">
      <Container fluid>
        <Link href="/" className="navbar-brand">
            <LazyLoadImage src="/images/logo.png"/>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link href="/our-approach" className="nav-link ">Our Approach</Link>
            
            <NavDropdown title="Services" id="navbarScrollingDropdown">

              <NavDropdown.Item ><Link href="/ship-management" className="menu">Ship Management</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link href="/crew-management" className="menu">Crew Management</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link href="/ship-agency-logistics" className="menu">Ship Agency & Logistics</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link href="/inspection" className="menu">Inspection</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item> <Link href="/commercial-services" className="menu">Commercial Services</Link></NavDropdown.Item>
              
            </NavDropdown>
            <Link href="/fleet" className="nav-link">Fleet</Link>
            <Link href="/careers" className="nav-link">Careers</Link>
            <Link href="/news-insights" className="nav-link">News & Insights</Link>
            <NavDropdown title="About Us" id="navbarScrollingDropdown">
              <NavDropdown.Item ><Link href="/company" className="menu">Company</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><Link href="/team" className="menu">Team</Link></NavDropdown.Item>
            </NavDropdown>
            
            <Link href="/contact-us" className="nav-link">Contact</Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;