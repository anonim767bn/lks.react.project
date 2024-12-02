import React, {useState, useEffect} from 'react';
import { getServiceDetailAction } from '../../../store/ApiActions';
import { useParams } from 'react-router-dom';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    getServiceDetailAction(id).then((data) => {
      setService(data);
    });
  }
    , [id]);

  return (
    <div>
      <h1>Service Detail Page</h1>
      <p>{service.description} {id}</p>
      {/* Здесь вы можете добавить логику для получения и отображения данных сервиса по ID */}
    </div>
  );
};

export default ServiceDetailPage;