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
<Col className="ban-text d-none d-lg-block"></Col>    
<Col className="icon-desc col-lg-6 col-12 pt-5">
<Row className="nuat-text">
    <Col className="naut-text">
<CountUp start={5} end={15} suffix={' <small>Years.</small>'}/>
    </Col>
    <Col className="naut-text">
    <CountUp start={1} end={6} suffix={' <small>Offices.</small>'} separator={','}/>
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