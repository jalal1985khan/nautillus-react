import {Container, Row, Col} from 'react-bootstrap';
import Link from 'next/link';

function AutoLayoutExample() {
  return (
    <Container className="footer-bg footer" fluid>
      <Row>
        <Col>
        <h2 className="footer-text">About</h2>
        <hr/>
        <ul className="fs-4 list-unstyled">
                                <li className="f-text"><Link href="/our-approach">Our Approach</Link></li>
                                <li className="f-text"><Link href="/careers">Careers</Link></li>
                                <li className="f-text"><Link href="/news-insights">News & Insights</Link></li>
                                <li className="f-text"><Link href="/company">Company</Link></li>
                                <li className="f-text"><Link href="/team">Team</Link></li>
                                <li className="f-text"><Link href="/contact">Contact</Link></li>
                            </ul>
  
        </Col>
        <Col>
        <h2 className="footer-text">Services</h2>
        <hr/>
        <ul className="fs-4 list-unstyled">
                                <li className="f-text"><Link href="/ship-management/">Ship Management</Link></li>
                                <li className="f-text"><Link href="/crew-management/">Crew Management</Link></li>
                                <li className="f-text"><Link href="/ship-agency-logistics">Ship Agency & Logistics</Link></li>
                                <li className="f-text"><Link href="/inspection">Inspection</Link></li>
                                <li className="f-text"><Link href="/commercial-services">Commercial Services</Link></li>
                                
                            </ul>   
        </Col>
        <Col>
        <h2 className="footer-text">Fleet</h2>
        <hr/>
        <ul className="fs-4 list-unstyled">
                                <li className="f-text"><Link href="/fleet/">Ship Management</Link></li>
                            </ul>  
        
        </Col>
        <Col>
        <h2 className="footer-text">Contact</h2>
        <hr className="footer-div"/>
        <ul className="fs-4 list-unstyled">
                                <li className="f-text">Email us :</li>
                                <li className="f-text"><Link href="/ship-agency-logistics">hello@nautilusshipping.com</Link></li>
                                <li className="f-text">Call us</li>
                                <li className="f-text"><Link href="/commercial-services">+ 91 44 4684 9999</Link></li>
                                
                            </ul> 
        
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;