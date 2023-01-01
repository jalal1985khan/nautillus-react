import React from 'react'
import {Container, Row, Col,Button} from 'react-bootstrap';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from "next/image";


const approach = () => {
  return (
    <div>
<Header/>
    
    <Image
    src="/images/crew_banner.jpeg"
    width="1500"
    height="620"
    background='no-repeat'
    background-size= 'cover'
    className="banner-img"
    
  />
<Container className="text-box">
<h1 className="mb-4 mt-5 heading">Crew Management</h1>
<p className="fs-3 mt-4">Our origins as a ship management services agency can be traced back to our beginnings in crew placement and management.</p>
<p className="fs-4">We understand the importance of a qualified crew that is at the forefront of all activities and is the key to a vessel’s safe and smooth day-to-day operation. In addition, safeguarding the vessel’s and the owner’s interests requires highly efficient utilization of crew. Through our own crewing offices in Chennai, Goa, Mumbai and, Kochi, we maintain one of India’s largest pools of qualified, motivated and, dedicated seafarers that fulfill these needs efficiently.</p>
<p className="fs-4">We offer crew supply services for all types of vessels. By using modern search and selection methods we ensure that our employees not only have the required professional qualifications but also have the right outlook and personality required for the job. Our crew management services include recruitment, selection, training, and management of officers and cadets and rating them for suitability and deployment for different vessels.</p>
<Row>
<Col sm={6}><Image src="/images/crew_img.jpeg" width="1000" height="500" alt="Shipping website "/></Col>
</Row>
<p className="fs-4 mt-3">We maintain a state-of-the-art database management system and crewing module that has been developed using advanced information technology systems. This ready repository helps in sourcing relevant crew to match the requirements of different ships.</p>
<p className="fs-4">Our crew survey and statistics show the difference we make in the lives of our crew besides the owners.  Nautilus shipping has one of the highest crew happiness and work satisfaction figures because we are able to provide back to back contracts and career development opportunities. In the long run, this enables us to maintain good continuity on ships and high retention rates. </p>
<h1 className="heading mt-5 mb-4">Our specific services include:</h1>
<Row>
<Col className="c_box">
<h3>Planning</h3>
<p>Screening, processing, recruitment, and placement onboard</p>
</Col>
<Col className="c_box">
<h3>Accounting</h3>
<p>Payroll and allotments</p>
</Col>
</Row>
<Row>
<Col className="c_box">
<h3>Performance</h3>
<p>Performance appraisals and KPI reports</p>
</Col>
<Col className="c_box">
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
<Col>
<h3>Commercial Services</h3>
<Link href="/commercial-services" >
<Button className="s_btn"> GO<Image src="/images/arrow.svg" width="50" height="50" alt="icons" style={{height:50}}/></Button>
</Link>
</Col>    
<Col>
<h3>Crew Management</h3>
<Link href="/crew-management" >
<Button className="s_btn"> GO<Image src="/images/arrow.svg" width="50" height="50" alt="icons" style={{height:50}}/></Button>
</Link>
</Col>    
<Col>
<h3>Ship Agency & Logistics</h3>
<Link href="/ship-agency-logistics" >
<Button className="s_btn"> GO<Image src="/images/arrow.svg" width="50" height="50" alt="icons" style={{height:50}}/></Button>
</Link>
</Col>    
<Col>
<h3 style={{height:67}}>Inspection</h3>
<Link href="/inspection" >
    <Button className="s_btn"> GO<Image src="/images/arrow.svg" width="50" height="50" alt="icons" style={{height:50}}/></Button>
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