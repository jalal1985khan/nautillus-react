import React from 'react'
import {Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from "next/image";


const approach = () => {
  return (
    <div>
<Header/>
    
    <Image
    src="/images/fleet_banner.jpeg"
    width="1500"
    height="620"
    background='no-repeat'
    background-size= 'cover'
    className="banner-img"
    alt="nautilus shipping"
    
  />

<Container className="text-box">
<h1 className="fs-2 heading">Minimizing Downtime and Maximizing Revenues for Ship</h1>
<h2 className="fs-2 heading">Owners and Operators</h2>
<h3 className="fs-2 pt-4">Operational efficiency and compliance</h3>
<p className="fs-5">At Nautilus, we endeavor to adhere to the highest industry standards and in compliance with the requisite rules and regulations. We do this by following a comprehensive maintenance program that includes both planned maintenance and regular inspections. We understand the importance of periodic inspections and are supported by our marine and technical superintendentsâ€™ experience with port state control inspections, flag state, and coast guard inspection authorities.</p>
<p className="fs-5">A strong focus on periodic and proactive maintenance programs ensures that potential damage from or to cargo is minimized and our vessels are always in optimal condition. Our strict adherence to schedule and efficient operations means your vessels have minimal downtime. More importantly, this approach has helped in asset preservation, cost, and operational efficiency, which in turn translates into maximum revenue days.</p>
<Image src="/images/fleet_1.jpeg" className="mt-4" width="1000" height="500" alt="nautilus shipping"/>
<h3 className="fs-2 pt-4 heading">Managing a range of ships with a strong business ethic</h3>
<div className="offer fs-5">We have experience in managing a range of ships including bulk carriers, general cargo vessels, containers, chemical tankers, offshore vessels and barges, dredgers (cutter and hopper suction).</div>
<div className="offer fs-5 mb-4">We manage tankers in adherence to SIRE standards.</div>
<img src="/images/fleet_2.jpeg" className="mt-4 mb-4" width="1000" height="500" alt="nautilus shipping"/>
<p className="fs-5 mt-4">The dry cargo vessels were managed within the projected annual cost and have delivered savings to the tune of 6% per annum for our clients. The waiver of our management fees when the vessels could not be operable due to unavoidable constraints demonstrates our strong commitment to the ownersâ€™ business goals.</p>

<div className="offer fs-5">
<Row>
 <Col sm={1} className="self"><img src="/images/right.svg"/></Col>
 <Col>We have demonstrated 24X7 working of dredgers and completion of projects well within the target date set by our clients. This has resulted in further businesses and contracts for owners.</Col>      
</Row>
 </div>
<div className="offer fs-5">
<Row>
 <Col sm={1} className="self"><img src="/images/right.svg"/></Col>
 <Col>DSV, PSV, drillships, crew boats, accommodation barges are also among the vessels we cater to.</Col>      
</Row>
</div>
<div className="offer fs-5">
<Row>
 <Col sm={1} className="self"><img src="/images/right.svg"/></Col>
 <Col>Drydocking costs of vessels are a key area we address. We help to reduce costs by carrying out all afloat repairs well in advance leaving only the class-related jobs to dock.</Col>      
</Row>
</div>
<div className="offer fs-5">
<Row>
 <Col sm={1} className="self"><img src="/images/right.svg"/></Col>
 <Col>The offshore industry has been quite volatile in the past years, and therefore, timing is key. We understand that quick mobilization and demobilization of crew play an important part in the operations of the offshore vessels and our clients will confirm our ability to demonstrate mobility and speed.</Col>      
</Row>
</div>
<p className="fs-4 mt-4 mb-4">Write to us at hello@nautilusshipping.com and we will get back to youâ€‹.</p>

</Container>


<Footer/>
    </div>
  )
}

export default approach