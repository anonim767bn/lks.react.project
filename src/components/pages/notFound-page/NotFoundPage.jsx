import React from 'react';
import { AppPaths } from '../../../constants';
import { Responses404 } from '@consta/uikit/Responses404';


const NotFoundPage = () => {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <Responses404 />
        <p>
          Вернуться на <a href={AppPaths.main}> главную страницу</a>
        </p>
      </div>
    );
  }

export default NotFoundPage