import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

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
        <Link href="/fleet" className="btn nuat-btn text-white">Read More</Link>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default BasicExample;