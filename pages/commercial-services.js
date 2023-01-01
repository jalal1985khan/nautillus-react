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
    src="/images/commercial_services_banner.jpeg"
    width="100%"
    height="620"
    background='no-repeat'
    background-size= 'cover'
    className="banner-img"
    
  />
<Container className="text-box">
<h1 className="mb-4 mt-5 heading">Commercial Services and Ship Broking</h1>
<p className="fs-4 mt-4">This covers a comprehensive commercial management service that comprises strategy and employee management for vessels. This includes negotiation and providing services for charter party contracts, full post-fixture support, and account tracking. We have the skills and resources to help clients define, measure, and successfully manage their shipping journey through skillful commercial management of their vessels. Specifically, we offer:</p>

<div className="offer fs-5">
<Row>
 <Col sm={1} className="self"><img src="/images/right.svg"/></Col>
 <Col>Advice on chartering strategies</Col>      
</Row>
</div>
<div className="offer fs-5 mt-4">
<Row>
 <Col sm={1} className="self"><img src="/images/right.svg"/></Col>
 <Col>
Sourcing best employment opportunity for a vessel</Col>      
</Row>
</div>
<div className="offer fs-5 mt-4">
<Row>
 <Col sm={1} className="self"><img src="/images/right.svg"/></Col>
 <Col>Negotiating charter party contracts</Col>      
</Row>
</div>
<div className="offer fs-5 mt-4">
<Row>
 <Col sm={1} className="self"><img src="/images/right.svg"/></Col>
 <Col>Instructing the vessel Master in respect of the charter party terms</Col>      
</Row>
</div>
<div className="offer fs-5 mt-4">
<Row>
 <Col sm={1} className="self"><img src="/images/right.svg"/></Col>
 <Col>Appointment and liaison with port agents</Col>      
</Row>
</div>

<div className="offer fs-5 mt-4">
<Row>
 <Col sm={1} className="self"><img src="/images/right.svg"/></Col>
 <Col>Vessel monitoring to ensure adherence to charter party terms</Col>      
</Row>
</div>

<div className="offer fs-5 mt-4">
<Row>
 <Col sm={1} className="self"><img src="/images/right.svg"/></Col>
 <Col>Post-fixture and account tracking functions</Col>      
</Row>
</div>

<div className="offer fs-5 mt-4">
<Row>
 <Col sm={1} className="self"><img src="/images/right.svg"/></Col>
 <Col>
Demurrage and Dispatch calculations</Col>      
</Row>
</div>
<div className="offer fs-5 mt-4">
<Row>
 <Col sm={1} className="self"><img src="/images/right.svg"/></Col>
 <Col>Voyage reporting and analysis</Col>      
</Row>
</div>
<div className="offer fs-5 mt-4">
<Row>
 <Col sm={1} className="self"><img src="/images/right.svg"/></Col>
 <Col>Supply of marine fuels, evaluating and nominating bunker suppliers, handling invoices and payments</Col>      
</Row>
</div>



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