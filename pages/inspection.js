import React from 'react'
import {Container, Row, Col,Button} from 'react-bootstrap';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';


const approach = () => {
  return (
    <div>
<Header/>

<Image
        src="/images/insights_banner.jpeg"
        width="800"
        height="620"
        background='no-repeat'
        background-size='cover'
        
        className="banner-img"
        
      />
    
  {/* <Image
    src="/images/insights_banner.jpeg"
    width="1500"
    height="620"
    background='no-repeat'
    background-size= 'cover'
    className="banner-img"~
    
  /> */}
<Container className="text-box">
<h1 className="mb-4 mt-5 heading">Inspection</h1>
<p className="fs-3 mt-4">Our expertise and focus on providing end-to-end solutions saw us launch an Inspections and Surveys practice in early 2014. The services offered under this include Fire Damage, Marine (Hull & Cargo), Engineering, Containers, Bunker and, other related Surveys.</p>

<h1 className="mb-4 mt-5 heading">Pre-Purchase inspection</h1>
<div className="offer fs-5">
<Row>
 <Col sm={1} className="self"><Image src="/images/right.svg" className="icon-svg" width="50" height="50"/></Col>
 <Col>Pre-shipment inspection of engineering & manufactured goods, agro products, mineral & ores for volume, weight, and quality as per specifications including supervision of carting, loading, and securing</Col>      
</Row>
</div>
<div className="offer fs-5 mt-4">
<Row>
 <Col sm={1} className="self"><Image src="/images/right.svg" className="icon-svg" width="50" height="50"/></Col>
 <Col>Cargo outturn - Supervision of discharge and delivery of cargo including Claim Control Services</Col>      
</Row>
</div>
<div className="offer fs-5 mt-4">
<Row>
 <Col sm={1} className="self"><Image src="/images/right.svg" className="icon-svg" width="50" height="50"/></Col>
 <Col>Marine Casualties and Cargo damages/losses – General Average</Col>      
</Row>
</div>
<div className="offer fs-5 mt-4">
<Row>
 <Col sm={1} className="self"><Image src="/images/right.svg" className="icon-svg" width="50" height="50"/></Col>
 <Col>On/Off Hire Survey, Draft Surveys, Break-bulk, Stowage & Securing of Cargo</Col>      
</Row>
</div>
<div className="offer fs-5 mt-4">
<Row>
 <Col sm={1} className="self"><Image src="/images/right.svg" className="icon-svg" width="50" height="50"/></Col>
 <Col>Supervision of Loading/Discharge of Project Cargoes</Col>      
</Row>
</div>




</Container>
<Container className="wbg-dark" fluid>
<Container className=" text-box">
<h1 className="heading pt-5 ">Our Ship Management services</h1>
<Row className="pt-5 pb-5">
<Col xs={6} sm={3} className="mt-45">
<h3 className="m-heading">Commercial Services</h3>
<Link href="/commercial-services" >
<Button className="s_btn"> GO<Image src="/images/arrow.svg" width="50" height="50" className="icon-arrow"/></Button>
</Link>
</Col>    
<Col xs={6} sm={3} className="mt-45">
<h3 className="m-heading">Crew Management</h3>
<Link href="/crew-management" >
<Button className="s_btn"> GO<Image src="/images/arrow.svg" width="50" height="50"className="icon-arrow"/></Button>
</Link>
</Col>    
<Col xs={6} sm={3} >
<h3 className="m-heading">Ship Agency & Logistics</h3>
<Link href="/ship-agency-logistics" >
<Button className="s_btn"> GO<Image src="/images/arrow.svg" width="50" height="50" className="icon-arrow"/></Button>
</Link>
</Col>    
<Col xs={6} sm={3} className="mt-45 mt-46">
<h3  className="m-heading">Inspection</h3>
<Link href="/inspection" >
    <Button className="s_btn"> GO<Image src="/images/arrow.svg" width="50" height="50" className="icon-arrow"/></Button>
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