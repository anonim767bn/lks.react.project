import React, { useState, useEffect } from 'react';
import { getServiceDetailAction } from '../../../store/ApiActions';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServiceDetailAction(id).then((data) => {
      setService(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <Container className="my-4">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Card>
            <Card.Img variant="top" src={service.image} alt={service.name} />
            <Card.Body>
              <Card.Title>{service.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{service.subtitle}</Card.Subtitle>
              <Card.Text>{service.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceDetailPage;