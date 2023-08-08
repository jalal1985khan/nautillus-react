import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';
import Link from 'next/link';


const sitemap = () => {
    return (
        <div>
            <Header />
            <Container fluid>
            <>
                                <Container className="footer-bg d-flex justify-content-center align-items-center" style={{ height: 120 }} fluid>
                                    <h2 className="text-white">Sitemap</h2>
                                </Container>
                    <Container className="mt-5">
                        <ul class="sitemap">
                            <Link href="/fleet"><li>Fleet</li></Link>
                            <Link href="/thank-you"><li>Thank you</li></Link>
                            <Link href="/"><li>Home</li></Link>
                            <Link href="/ship-agency-logistics"><li>Ship Agency & Logistics</li></Link>
                            <Link href="/inspection"><li>Inspection</li></Link>
                            <Link href="/commercial-services"><li>Commercial Services</li></Link>
                            <Link href="/disclaimer"><li>Disclaimer</li></Link>
                            <Link href="/careers"><li>Current Job Openings</li></Link>
                            <Link href="/our-approach"><li>Our Approach</li></Link>
                            
                            <Link href="/contact-us"><li>Contact</li></Link>
                            <Link href="/privacy-statement"><li>Privacy Statement</li></Link>
                            <Link href="/team"><li>Team</li></Link>
                            <Link href="/crew-management"><li>Crew Management</li></Link>
                            <Link href="/ship-management"><li>Ship Management</li></Link>
                            <Link href="/company"><li>Company</li></Link>
                            <Link href="/news-insights"><li>News & Insights</li></Link>
                                    </ul>

                                </Container>
                            </>
            </Container>

            <Footer />
        </div>
    )
}

export default sitemap

