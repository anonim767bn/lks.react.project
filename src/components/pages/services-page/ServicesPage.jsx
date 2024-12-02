import React, {useEffect, useState} from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getServicesListAction } from '../../../store/ApiActions';


const ServicesPage = () =>{
    const [news, setNews] = useState([]);
    
    useEffect(() => {
      getServicesListAction().then((data) => {
        setNews(data);
      });
    }, []);
    const truncateText = (text, maxLength) => {
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength) + '...';
    };
    return (
      <div>
        <h1 className="my-4">Список услуг</h1>
        <Row>
          {news.map(item => (
            <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
              <Card style={{ width: '100%' }}>
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
      </div>
    );
  };
  
  export default ServicesPage;