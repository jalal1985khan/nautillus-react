import {Container, Image, Row, Col} from 'react-bootstrap';
import CountUp from 'react-countup';

function CardExample() {

  return (

    <div >
        <Container fluid className="p-0 home-banner" style={{ backgroundImage:`url(/images/home_banner.jpeg)`}}>
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
<Col className="ban-text">Delivering excellence in
technical and crew management</Col>    
<Col className="icon-desc">
<Row className="icon-text">
    <Col className="ani-text">
<img src="/images/ship.png"/>
<CountUp start={50} end={100} suffix={'+'}/>
<p>Ships manned</p>
    </Col>
    <Col className="ani-text">
    <img src="/images/database.png"/>
    <CountUp start={20000} end={50000} suffix={'+'} separator={','}/>
<p>Seafarer database</p>
    </Col>
    </Row>
<Row className="icon-text">
<Col className="ani-text">
<img src="/images/crew.png"/>
<CountUp start={500} end={1000} suffix={'+'} separator={','}/>
<p>Crew on active rolls</p>
    </Col>
    <Col className="ani-text">
<img src="/images/clients.png"/>
<CountUp start={20} end={50} suffix={'+'}/>
<p>Clients</p>
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