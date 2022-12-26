import {Container, ListGroup, Row, Col} from 'react-bootstrap';
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
        <ListGroup variant="flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
        
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;