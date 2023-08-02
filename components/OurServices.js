import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Container className="mt-4 mb-4">
        <h1 className="mb-4">Our services</h1>
    <Card  className="service-card">
      <Card.Img  src="/images/services.jpeg" className="service-img"/>
      <Card.Body className="wbg-main s-body">
        <Card.Title className="c-title">Fleet</Card.Title>
        <Card.Text className="c-para">
        Our experience and capability spans a number of fleet sectors within the maritime industry.
        </Card.Text>
        <Button variant="primary" className="nuat-btn">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default BasicExample;