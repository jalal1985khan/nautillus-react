import React from 'react'
import {Container, Row, Col,Card, Image, Accordion, Button} from 'react-bootstrap';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';


const approach = () => {
  return (
    <div>
<Header/>
    
    <Image
    src="/images/company_banner.jpeg"
    width="100%"
    height="620"
    background='no-repeat'
    background-size= 'cover'
    className="banner-img"
    
  />
<Container className="text-box">
    <Container className="grad-color">
<h1 className="mb-4  text-white">Profile</h1>
<p className="fs-5 mt-4 text-white">Nautilus Shipping is a fast-growing provider of maritime solutions. We have over 15 years of experience and six strategically located offices. We strive to deliver excellence across Ship Management, Crewing, Ship Agency, Ship Broking, Vessel Inspections, Surveys and, Commercial Vessel Management services.</p>
     
    </Container>
<h1 className="mb-4 mt-5">Specifically, we offer:</h1>
<p className="fs-5 mt-4">Our experienced team, along with a carefully cultivated network of agencies, suppliers, and solution providers puts us in a strong position to deliver ship management services seamlessly.</p>
<p className="fs-5 mt-4">We are guided by our philosophy of keeping the business goals of our clients at the forefront of everything we do. You can read more about this in our 4Ps approach here.</p>
<Button className="c_btn">Get in touch with the seafaring experts today</Button>

<h2 className="mt-5">We are a registered Recruitment & Placement agency authorized by the Director-General of Shipping, India.</h2>
<p className="heading-1">Our license No. is RPSL-CHN-012, valid till December 29, 2026 and we operate in compliance with Maritime Labour Convention 2006 certified by IRS Class. Nautilus is also an ISO 9001:2008 company, certified by IRQS.</p>

</Container>
<Container className="wbg-dark" fluid>
<Container className=" text-box">
<h1 className="heading pt-5 ">Our Ship Management services</h1>
<Row className="pt-5 pb-5">
<Col>
<h3>Commercial Services</h3>
<Link href="/commercial-services" >
<Button className="s_btn"> GO<img src="/images/arrow.svg" style={{height:50}}/></Button>
</Link>
</Col>    
<Col>
<h3>Crew Management</h3>
<Link href="/crew-management" >
<Button className="s_btn"> GO<img src="/images/arrow.svg" style={{height:50}}/></Button>
</Link>
</Col>    
<Col>
<h3>Ship Agency & Logistics</h3>
<Link href="/ship-agency-logistics" >
<Button className="s_btn"> GO<img src="/images/arrow.svg" style={{height:50}}/></Button>
</Link>
</Col>    
<Col>
<h3 style={{height:67}}>Inspection</h3>
<Link href="/inspection" >
    <Button className="s_btn"> GO<img src="/images/arrow.svg" style={{height:50}}/></Button>
</Link>
</Col>    
</Row>
</Container>

</Container>
<Footer/>
    </div>
  )
}

export default approach