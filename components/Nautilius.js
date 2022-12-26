import {Container, Image, Row, Col, Button} from 'react-bootstrap';
import CountUp from 'react-countup';

function CardExample() {

  return (

    <div >
        <Container fluid className="p-0 mt-4 home-banner" style={{ backgroundImage:`url(/images/naut_banner.jpeg)`}}>
      {/* <Image
                src="/images/home_banner.jpeg"
                width="100%"
                height="620"
                background='no-repeat'
                background-size='cover'
                className="banner-img"
                
            /> */}
<Container>
<Row>
<Col className="ban-text"></Col>    
<Col className="icon-desc">
<Row className="nuat-text">
    <Col className="naut-text">
<CountUp start={5} end={15} suffix={' Years.'}/>
    </Col>
    <Col className="naut-text">
    <CountUp start={1} end={6} suffix={' Offices.'} separator={','}/>
    </Col>
    </Row>
<Row className="nuat-text">
<Col className="naut-text">
    <p>And a journey of sailing through some incredible achievements and relationships.</p>
    <p><Button className="nuat-btn">Know More</Button></p>
    </Col>
    </Row>
</Col>
</Row>

</Container>
</Container>
    </div>
  );
}

export default CardExample;