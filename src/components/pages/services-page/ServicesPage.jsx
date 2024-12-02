import React, { useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { getToken } from '../login-page/LoginPage';
import { useNavigate } from 'react-router-dom';
import { fetchServices } from '../../../store/servicesSlice';

const ServicesPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const services = useSelector((state) => state.services.data);
  const servicesStatus = useSelector((state) => state.services.status);
  const error = useSelector((state) => state.services.error);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate('/auth'); // Перенаправляем на страницу авторизации, если токен отсутствует
      return;
    }

    if (servicesStatus === 'idle') {
      dispatch(fetchServices());
    }
  }, [dispatch, navigate, servicesStatus]);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  let content;

  if (servicesStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (servicesStatus === 'succeeded') {
    content = (
      <Row>
        {services.map((item) => (
          <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={item.image} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.subtitle}</Card.Subtitle>
                <Card.Text>{truncateText(item.description, 100)}</Card.Text>
                <Card.Link href={`/services/${item.id}`}>Подробнее</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  } else if (servicesStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <h1 className="my-4">Список услуг</h1>
      {content}
    </div>
  );
};

export default ServicesPage;