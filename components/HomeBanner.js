import {Container,  Row, Col} from 'react-bootstrap';
import CountUp from 'react-countup';
import Image from "next/image";

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
<Image src="/images/ship.png" width="90" height="90" alt="ship"/>
<CountUp start={50} end={100} suffix={'+'}/>
<p>Ships manned</p>
    </Col>
    <Col className="ani-text">
    <Image src="/images/database.png" width="90" height="90" alt="ship"/>
    <CountUp start={20000} end={50000} suffix={'+'} separator={','}/>
<p>Seafarer database</p>
    </Col>
    </Row>
<Row className="icon-text">
<Col className="ani-text">
<Image src="/images/crew.png" width="90" height="90" alt="ship"/>
<CountUp start={500} end={1000} suffix={'+'} separator={','}/>
<p>Crew on active rolls</p>
    </Col>
    <Col className="ani-text">
<Image src="/images/clients.png" width="90" height="90" alt="ship"/>
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