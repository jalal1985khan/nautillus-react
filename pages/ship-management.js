import React from 'react'
import {Container, Row, Col,Card, Image, Accordion, Button} from 'react-bootstrap';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contactus'
import Head from 'next/head';



const approach = () => {
  return (
    <div>
<Head >
{/* <!-- HTML Meta Tags --> */}
<title>Ship Management - Ship Management Company, Vessel Management Services | Nautilus Shipping</title>
<meta name="description" content="Nautilus provides complete ship management and Technical Services to global ship owners and operators across the globe. Our technical support services help keep vessels safe and in an ideal condition for operations."></meta>
{/* <!-- Google / Search Engine Tags --> */}
<meta itemprop="name" content="Ship Management - Ship Management Company, Vessel Management Services | Nautilus Shipping"></meta>
<meta itemprop="description" content="Nautilus provides complete ship management and Technical Services to global ship owners and operators across the globe. Our technical support services help keep vessels safe and in an ideal condition for operations."></meta>
<meta itemprop="image" content=""></meta>
{/* <!-- Facebook Meta Tags --> */}
<meta property="og:url" content="Ship Management - Ship Management Company, Vessel Management Services | Nautilus Shipping"></meta>
<meta property="og:type" content="article"></meta>
<meta property="og:title" content="Ship Management - Ship Management Company, Vessel Management Services | Nautilus Shipping"></meta>
<meta property="og:description" content="Nautilus provides complete ship management and Technical Services to global ship owners and operators across the globe. Our technical support services help keep vessels safe and in an ideal condition for operations."></meta>
<meta property="og:image" content=""></meta>
{/* <!-- Twitter Meta Tags --> */}
<meta name="twitter:card" content="summary_large_image"></meta>
<meta name="twitter:title" content="Ship Management - Ship Management Company, Vessel Management Services | Nautilus Shipping"></meta>
<meta name="twitter:description" content="Nautilus provides complete ship management and Technical Services to global ship owners and operators across the globe. Our technical support services help keep vessels safe and in an ideal condition for operations."></meta>
<meta name="twitter:image" content=""></meta>
</Head> 
<Header/>
    
    <Image
    src="/images/ship_management_banner.jpeg"
    width="100%"
    height="620"
    background='no-repeat'
    background-size= 'cover'
    className="banner-img"
    
  />
<Container className="text-box">
<h1 className="mb-4 mt-5 heading">Ship Management & Technical Services</h1>
<p className="fs-4 mt-4">Ship management involves a range of services such as <Link href="/technical-ship-management" className="n-link">technical support</Link>, commercial, procurement, crewing, and safety management.</p>
<p className="fs-4">As part of our solutions, we provide complete <Link href="/shipmanagement-services" className="n-link">ship management services</Link> to help keep vessels safe and in an optimum running condition. This helps your operations to experience minimum downtime.</p>
<Row>
<Col sm={6}><p className="fs-4">We make this possible through a dedicated team of professionals both offshore and onboard. Our experienced team provides the above-mentioned services for most types of vessels. We are among the fastest growing ship managers in the region with 12 vessels of all types currently under management. These include bulkers, tankers, and container vessels.</p></Col>
<Col sm={6}><Image src="/images/ship_manage_1.jpeg" className="m-width" width="500" height="300" alt="Nautilus Shipping"/></Col>
</Row>
<p className="fs-4">Our network of offices in Singapore and India meets the highest standards and accreditations for quality, knowledge, and safety.</p>
<h1 className="heading mt-5 mb-4">Our Technical Management services include:</h1>
<Row>
          <Col className="s_table" xs={6} lg={4}>Full technical management of vessels</Col>
<Col className="s_table" xs={6} lg={4}>Technical inspections for owners, banks, insurers, bareboat charterers</Col>
<Col className="s_table" sm={12} lg={4}>Superintendence for emergency or scheduled repairs and dry-docking</Col>
</Row>
<Row>
<Col className="s_table" xs={6} lg={4} >On/off hire surveys</Col>
<Col className="s_table" xs={6} lg={4}>Ship specific, computerized planned maintenance system</Col>
<Col className="s_table" sm={6} lg={4}>Ensuring availability of correct spares on board</Col>
</Row>
<Row>
<Col className="s_table" xs={6} lg={4}>Periodic analysis of fuel and lubricants</Col>
<Col className="s_table" xs={6} lg={4}>Monitoring of peak performance metrics</Col>
<Col className="s_table" sm={6} lg={4}>Regular inspections of the vessels and implementation of timely corrective action</Col>
</Row>
<Row>
<Col className="s_table">Tech monitoring analysis and solution for better performance</Col>
</Row>


</Container>
<Container className="wbg-main a-center mt-4 p-4" fluid>
<h1 className="text-white">Safety & Security</h1>
<Container className="p-0 text-box">
<Row>
<Col className="s_box" sm={4} xs={6}>
<Image src="/images/ship_icon_1.svg" className="icon-50" alt="Nautilus Shipping" width="100" height="100"/>
<p>Office and shipboard audits for compliance with international standards and owners’ QA systems</p>
</Col>    
<Col className="s_box" sm={4} xs={6}>
<Image src="/images/ship_icon_2.svg" className="icon-50" alt="Nautilus Shipping" width="100" height="100"/>
<p>SMS audits for compliance with ISM and ISO standards</p>
</Col>    
<Col className="s_box" sm={4} xs={6}>
<Image src="/images/ship_icon_3.svg" className="icon-50" alt="Nautilus Shipping" width="100" height="100"/>
<p>Onboard safety and security training of staff</p>
</Col>    
</Row> 
<Row>
<Col className="s_box" sm={4} xs={6}>
<Image src="/images/ship_icon_4.svg" className="icon-50" alt="Nautilus Shipping" width="100" height="100"/>
<p>Transit security – tracking, risk management, vessel hardening</p>
</Col> 
<Col className="s_box" sm={4} xs={6}>
<Image src="/images/ship_icon_5.svg" className="icon-50" alt="Nautilus Shipping" width="100" height="100"/>
<p>Emergency Incident Management including crisis media response management</p>
</Col>    
<Col className="s_box">

</Col>    
<Col></Col>    
</Row>   
</Container>
</Container>
<Container className="text-box wbg-white">
<h1 className="mb-4 mt-4">Dry Dock, Repair & New building</h1>
<ul>
<li className="fs-4">Shipyard supervision of new buildings, conversions, and retrofits</li>    
<li className="fs-4">Full supervision of ship repairs or dry dockings including procurement of spares and paints</li>    
<li className="fs-4">Afloat repairs in transit</li>    
<li className="fs-4">New building plan approvals</li>    
<li className="fs-4">Machinery and equipment selection and procurement</li>    
</ul>
</Container>
<hr className="mt-5"/>
<Container className="text-box">
    <h1 className="mt-5 mb-4">Consultancy</h1>
<Row>
<Col className="s_table " xs={6} lg={6}>Ship inspections and valuations</Col>
<Col className="s_table " xs={6} lg={6}>Sale and Purchase inspections</Col>
<Col className="s_table " xs={6} lg={6}>Technical experts and expert witnesses for banks, law firms, and owners</Col>
<Col className="s_table " xs={6} lg={6}>Setup and administration of ship-owning companies</Col>
</Row>    

<h1 className="mt-5 mb-4">Insurance</h1>
<Row>
<Col xs={6}>
<Row >
<Col sm={2} className="self"><Image src="/images/svg_1.svg" className="icons" alt="Nautilus Shipping" width="60" height="60"/></Col>
<Col className="fs-4">Placing of insurance cover at competitive rates</Col>
</Row>
</Col>
<Col xs={6}>
<Row>
<Col sm={2} className="self"><Image src="/images/svg_1.svg" className="icons" alt="Nautilus Shipping" width="60" height="60"/></Col>
<Col className="fs-4">Hull and Machinery, War Risk, Loss of Hire, On Deck cover, P&I</Col>
</Row>
</Col>
<Col xs={6}>
<Row>
<Col sm={2} className="self"><Image src="/images/svg_1.svg" className="icons" alt="Nautilus Shipping" width="60" height="60"/></Col>
<Col className="fs-4 self">Dynamic management of War Risk</Col>
</Row>
</Col>    
</Row>
<Row className="mt-4">
<Col xs={6}>
<Row>
<Col sm={2} className="self"><Image src="/images/svg_1.svg" className="icons" alt="Nautilus Shipping" width="60" height="60"/></Col>
<Col className="fs-4 self">Full claims handling</Col>
</Row>
</Col>
<Col xs={6} >
<Row>
<Col sm={2} className="self"><Image src="/images/svg_1.svg" className="icons" alt="Nautilus Shipping" width="60" height="60"/></Col>
<Col className="fs-4 self">Expert witness services</Col>
</Row>
</Col>
<Col>

</Col >    
</Row>
</Container>
<Container className="wbg-dark" fluid>
<Container className=" text-box">
<h1 className="heading pt-5 ">Our Ship Management services</h1>
<Row className="pt-5 pb-5">
<Col xs={6} sm={3} className="mt-45 mt-46">
<h3  className="m-heading">Inspection</h3>
<Link href="/inspection" >
    <Button className="s_btn"> GO<Image src="/images/arrow.svg" width="100" height="50" className="icon-arrow" alt="Nautilus Shipping"/></Button>
</Link>
</Col>
<Col xs={6} sm={3} className="mt-45 ">
<h3 className="m-heading">Ship Agency &<br/>Logistics</h3>
<Link href="/ship-agency-logistics" >
<Button className="s_btn"> GO<Image src="/images/arrow.svg" width="100" height="50" className="icon-arrow" alt="Nautilus Shipping"/></Button>
</Link>
</Col>
<Col xs={6} sm={3} className="mt-45 ">
<h3 className="m-heading">Crew<br/>Management</h3>
<Link href="/crew-management" >
<Button className="s_btn"> GO<Image src="/images/arrow.svg" width="100" height="50"className="icon-arrow" alt="Nautilus Shipping"/></Button>
</Link>
</Col> 
            
<Col xs={6} sm={3} className="mt-45">
<h3 className="m-heading">Ship<br/>Management</h3>
<Link href="/ship-management" >
<Button className="s_btn"> GO<Image src="/images/arrow.svg" width="100" height="50" className="icon-arrow" alt="Nautilus Shipping"/></Button>
</Link>
</Col>    
</Row>
</Container>
</Container>
      <Contact/>
<Footer/>
    </div>
  )
}

export default approach