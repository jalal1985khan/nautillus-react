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
    src="/images/team_banner.jpeg"
    width="100%"
    height="620"
    background='no-repeat'
    background-size= 'cover'
    className="banner-img"
    
  />
<Container className="text-box-1 wbg-main">
<h1 className="text-white">Our Team</h1>
<p className="fs-5 text-white">Our leadership team is a combination of professionals with deep experience in the industry as well as of the business. Each one of us has built a formidable network of people across departments of the industry. This enables us to be agile in our response to clients’ needs. We are also focused on making Nautilus a place where our people can grow and contribute to the business, the clients, and the industry.</p>

<Row>
<Col>
<Card className="wbg-main">
      <Card.Img variant="top" src="/images/ajay_handa.png" style={{width:250}}/>
      <Card.Body>
        <Card.Title className="fs-2 text-white">Captain Ajay Handa</Card.Title>
        <hr className="line"/>
        <Card.Title className="fs-4 txt">Executive Director</Card.Title>
        <Card.Text className="fs-5 txt">
        With a career spanning 41 years, he’s played an active role in the Marine industry. Started as a Mariner in 1976, a career that spanned 12 years. He then moved into an active shore role in various companies starting from JM BAXI & Indsotra. He went on to lead companies in the shipping and logistics business including Rostra Overseas, Sotra, Essar Shipping, Tradex Group and Finally Martrade. Capt. Handa currently spends time mentoring his two passions – Cleaning lakes through The Pavitra Foundation and Ship Management through Nautilus Shipping.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="wbg-main">
      <Card.Img variant="top" src="/images/anil_cariappa​.png" style={{width:250}}/>
      <Card.Body>
        <Card.Title className="fs-2 text-white">Anil Cariappa​</Card.Title>
        <hr className="line"/>
        <Card.Title className="fs-4 txt">Executive Director</Card.Title>
        <Card.Text className="fs-5 txt">
        Anil has an extensive sea going experience as a Marine Engineer and he started his shore career in 1994 and elevated to MD of ITM shipping (Wilhelmsen, Norway), now part of V Group. He has recently retired from that position and plays an advisory role with Nautilus.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>    
</Row>

<Row>
<Col>
<Card className="wbg-main">
      <Card.Img variant="top" src="/images/manikandan.png" style={{width:250}}/>
      <Card.Body>
        <Card.Title className="fs-2 text-white">Manikandan</Card.Title>
        <hr className="line"/>
        <Card.Title className="fs-4 txt">CEO & Managing Director</Card.Title>
        <Card.Text className="fs-5 txt">
        Mani has had extensive sea going experience as a Marine Engineer. Was with V Ships between 2007 & 2020. He headed V Ships India as MD before taking over as CEO in Nautilus
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="wbg-main">
      <Card.Img variant="top" src="/images/narayan_rajan.png" style={{width:250}}/>
      <Card.Body>
        <Card.Title className="fs-2 text-white">Narayan Rajan</Card.Title>
        <hr className="line"/>
        <Card.Title className="fs-4 txt">Co-Founder & Managing Director</Card.Title>
        <Card.Text className="fs-5 txt">
        Engineer. Was with V Ships between 2007 & 2020. He headed V Ships India as MD before taking over as CEO in Nautilus


Narayan Rajan
Co-Founder & Managing Director
A passionate and aggressive first-generation entrepreneur, Narayan Rajan, co-founded Nautilus Shipping in 2005.  During his 15+ years stint as the CEO and CO-Founder of Nautilus, Narayan has been the driving force behind the company’s commercial operation. A keen observer of business and technology trends, Narayan constantly looks at ways to customize existing offerings and new possibilities. Narayan holds a Bachelor’s Degree in Electronics from St. Joseph’s Arts and Science College, Bangalore.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>    
</Row>
<Row>
<Col>
<Card className="wbg-main">
      <Card.Img variant="top" src="/images/ajay_krishnamani.png" style={{width:250}}/>
      <Card.Body>
        <Card.Title className="fs-2 text-white">Ajay Krishnamani</Card.Title>
        <hr className="line"/>
        <Card.Title className="fs-4 txt">Co-Founder & Managing Director</Card.Title>
        <Card.Text className="fs-5 txt">
        Ajay is the founder Director and CEO of Nautilus Shipping. He has sailed in various capacities in the merchant navy fleet and worked with reputed organizations ashore. He has over 15 years of experience in the field of manning and management. He also is an internal auditor certified by Lloyd’s. He has over the years established a wide network in the shipping industry is known for his straight forward, ethical and principled approach.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="wbg-main">
      <Card.Img variant="top" src="/images/viswananth_iyer.png" style={{width:250}}/>
      <Card.Body>
        <Card.Title className="fs-2 text-white">K.Viswananth Iyer</Card.Title>
        <hr className="line"/>
        <Card.Title className="fs-4 txt">VP – Technical</Card.Title>
        <Card.Text className="fs-5 txt">
        K.V Iyer comes with 40 years of experience in Merchant Navy vessels of which 21 years are in the rank of Chief Engineer. He possesses expertise and has vast knowledge of Crude/Product Oil tankers, Liquid Petroleum Gas Carriers, Bulk Carriers, Refrigerated Cargo ships, Container ships and General Cargo ships of various tonnages. Over the course of his long-standing career, K.V Iyer has been involved in all kinds of ship machinery repairs including steel renewal.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>    
</Row>
<Row>
<Col>
<Card className="wbg-main">
      <Card.Img variant="top" src="/images/ajay_gangaadharan​.png" style={{width:250}}/>
      <Card.Body>
        <Card.Title className="fs-2 text-white">Capt. Ajay Gangaadharan​</Card.Title>
        <hr className="line"/>
        <Card.Title className="fs-4 txt">Head Training​</Card.Title>
        <Card.Text className="fs-5 txt">
        Master Mariner served in command on tier 1 tankers. Certified trainer, vetting inspector and lead Auditor. Comes with over 15 years of shore experience and has setup the entire training division at Nautilus Shipping.​
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="wbg-main">
      <Card.Img variant="top" src="/images/visweswaran.png" style={{width:250}}/>
      <Card.Body>
        <Card.Title className="fs-2 text-white">Capt. Eshwar Visweswaran</Card.Title>
        <hr className="line"/>
        <Card.Title className="fs-4 txt">Head Chartering</Card.Title>
        <Card.Text className="fs-5 txt">
        Master Mariner with a double masters in logistics & law, prior to joining Nautilus Capt Eshwar was the head oil & gas for Karaikal Ports. He has had over 20 years of experience in various aspects of shipping.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>    
</Row>

<hr className="line pb-5"/>
</Container>
<Footer/>
    </div>
  )
}

export default approach