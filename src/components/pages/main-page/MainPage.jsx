import React, {useEffect, useState} from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getNewsListAction } from '../../../store/ApiActions';


const MainPage = () =>{
    const [news, setNews] = useState([]);
    
    useEffect(() => {
      getNewsListAction().then((data) => {
        setNews(data);
      });
    }, []);
    return (
      <div>
        <h1>Список новостей</h1>
        <Row>
          {news.map(item => (
            <Col key={item.id} sm={12} md={6} lg={4}>
              <Card style={{ marginBottom: '20px' }}>
                {/* Если есть изображение, можно добавить его */}
                {/* <Card.Img variant="top" src={item.imageUrl} /> */}
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button variant="primary">Подробнее</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
}

export default MainPage