import {Carousel, Container} from 'react-bootstrap';

function UncontrolledExample() {
  return (

    <Container className="mt-4">
        <h2 className="ps-text">Powering ship management with the 4Ps</h2>
            <h3 className="ps-text-sub">The Nautilus promise</h3>
    <Carousel indicators={false}>
    <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/4ps_01.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/4ps_02.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/4ps_03.jpeg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/4ps_04.jpeg"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default UncontrolledExample;