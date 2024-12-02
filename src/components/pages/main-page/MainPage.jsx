import React, { useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../../../store/newsSlice';

const MainPage = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.data);
  const newsStatus = useSelector((state) => state.news.status);
  const error = useSelector((state) => state.news.error);

  useEffect(() => {
    if (newsStatus === 'idle') {
      dispatch(fetchNews());
    }
  }, [dispatch, newsStatus]);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  let content;

  if (newsStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (newsStatus === 'succeeded') {
    content = (
      <Row>
        {news.map((item) => (
          <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.subtitle}</Card.Subtitle>
                <Card.Text>{truncateText(item.description, 100)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  } else if (newsStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <h1 className="my-4">Список новостей</h1>
      {content}
    </div>
  );
};

export default MainPage;