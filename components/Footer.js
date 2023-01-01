import {Container, Row, Col} from 'react-bootstrap';
import Link from 'next/link';
import Image from "next/image";

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
                                <li className="f-text"><Link href="/fleet/">Fleet</Link></li>
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
                            <Container>
        <ul className="list-unstyled d-flex ">
        <li className="f-text px-2"><Link href="https://www.facebook.com/NautilusShippingIndia/" target="_blank"><Image src="/images/facebook.png" width="40" height="40" alt="facebook" style={{height:40}}/></Link></li>
        <li className="f-text px-2"><Link href="https://in.linkedin.com/company/nautilusshipping" target="_blank"><Image src="/images/linkedin.png" width="40" height="40" alt="linkedin"  style={{height:40}}/></Link></li>
        <li className="f-text px-2"><Link href="https://www.instagram.com/nautilusshipping/?hl=en" target="_blank"><Image src="/images/instagram.png" width="40" height="40" alt="instagram"  style={{height:40}}/></Link></li>
        <li className="f-text px-2"><Link href="https://www.youtube.com/channel/UC5V1kVUx3Cg9WjI3PotjX1g" target="_blank"><Image src="/images/youtube.png" width="40" height="40" alt="youtube"  style={{height:40}}/></Link></li>
        </ul>
      </Container>
        </Col>
      </Row>
      <hr/>
      <Container>
        <ul className="list-unstyled d-flex justify-content-center">
        <li className="f-text px-3"><Link href="/sitemap/">Sitemap</Link></li>
        <li className="f-text px-3"><Link href="/privacy-statement/">Privacy Statement</Link></li>
        <li className="f-text"><Link href="/disclaimer/">Disclaimer</Link></li>
        </ul>
      </Container>
    </Container>
  );
}

export default AutoLayoutExample;