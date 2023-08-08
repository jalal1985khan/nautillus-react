import React from 'react'
import {Container, Row, Col,Card,Accordion, Button} from 'react-bootstrap';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';


const approach = () => {
  return (
    <div>
<Header/>
    
    <Image
    src="/images/ship_agency_banner.jpeg"
    width="800"
    height="620"
    background='no-repeat'
    background-size= 'cover'
    className="banner-img"
    
  />
<Container className="text-box">
<h1 className="mb-4 mt-5 heading">Ship Agency & Logistics</h1>
<p className="fs-3 mt-4">We deliver a range of port agency, marine, and logistics services through a robust partner network. From pre-arrival to post-departure, our operational personnel pay close attention to accurate and speedy communication in handling overall disbursement control. We leverage our experience to ensure that vessels enter and exit ports quickly with all port services taken care of in an efficient manner.</p>
<p className="fs-4">We understand the importance of a qualified crew that is at the forefront of all activities and is the key to a vessel’s safe and smooth day-to-day operation. In addition, safeguarding the vessel’s and the owner’s interests requires highly efficient utilization of crew. Through our own crewing offices in Chennai, Goa, Mumbai and, Kochi, we maintain one of India’s largest pools of qualified, motivated and, dedicated seafarers that fulfill these needs efficiently.</p>
<p className="fs-4">We offer crew supply services for all types of vessels. By using modern search and selection methods we ensure that our employees not only have the required professional qualifications but also have the right outlook and personality required for the job. Our crew management services include recruitment, selection, training, and management of officers and cadets and rating them for suitability and deployment for different vessels.</p>
<Row>
<Col sm={6}><Image src="/images/crew_img.jpeg" className="m-width" width="600" height="400"/></Col>
</Row>
<p className="fs-4 mt-3">We maintain a state-of-the-art database management system and crewing module that has been developed using advanced information technology systems. This ready repository helps in sourcing relevant crew to match the requirements of different ships.</p>
<p className="fs-4">Our crew survey and statistics show the difference we make in the lives of our crew besides the owners.  Nautilus shipping has one of the highest crew happiness and work satisfaction figures because we are able to provide back to back contracts and career development opportunities. In the long run, this enables us to maintain good continuity on ships and high retention rates. </p>
<h1 className="heading mt-5 mb-4">Our specific services include:</h1>
<Row>
<Col className="c_box" xs={12} sm={6}>
<h3>Planning</h3>
<p>Screening, processing, recruitment, and placement onboard</p>
</Col>
<Col className="c_box" xs={12} sm={6}>
<h3>Accounting</h3>
<p>Payroll and allotments</p>
</Col>
</Row>
<Row>
<Col className="c_box" xs={12} sm={6}>
<h3>Performance</h3>
<p>Performance appraisals and KPI reports</p>
</Col>
<Col className="c_box" xs={12} sm={6}>
<h3>Computer-based testing and Training</h3>
<p>Training need analysis and mapping using structured training methods, followed by shore-based training (classroom and simulators) at the Nautilus Training Centers</p>
</Col>
</Row>
<Row className="mt-4">
<Col>Full or partial crew management for all types of vessels</Col>
<Col>Onboard training of ship’s crew including CBT (computer-based training)</Col>
</Row>
</Container>
<Container className="wbg-dark" fluid>
<Container className=" text-box">
<h1 className="heading pt-5 ">Our Ship Management services</h1>
<Row className="pt-5 pb-5">
<Col xs={6} sm={3} className="mt-45">
<h3 className="m-heading">Commercial Services</h3>
<Link href="/commercial-services" >
<Button className="s_btn"> GO<Image src="/images/arrow.svg" width="100" height="50" className="icon-arrow"/></Button>
</Link>
</Col>    
<Col xs={6} sm={3} className="mt-45">
<h3 className="m-heading">Crew Management</h3>
<Link href="/crew-management" >
<Button className="s_btn"> GO<Image src="/images/arrow.svg" width="100" height="50"className="icon-arrow"/></Button>
</Link>
</Col>    
<Col xs={6} sm={3} >
<h3 className="m-heading">Ship Agency & Logistics</h3>
<Link href="/ship-agency-logistics" >
<Button className="s_btn"> GO<Image src="/images/arrow.svg" width="100" height="50" className="icon-arrow"/></Button>
</Link>
</Col>    
<Col xs={6} sm={3} className="mt-45 mt-46">
<h3  className="m-heading">Inspection</h3>
<Link href="/inspection" >
    <Button className="s_btn"> GO<Image src="/images/arrow.svg" width="100" height="50" className="icon-arrow"/></Button>
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