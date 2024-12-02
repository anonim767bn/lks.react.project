import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppPaths } from '../../constants';
import NotFoundPage from '../pages/notFound-page/NotFoundPage';
import MainPage from '../pages/main-page/MainPage';
import ServicesPage from '../pages/services-page/ServicesPage';
import MainLayout from '../../layouts/main-layouts/MainLayout';
import LoginPage from '../pages/login-page/LoginPage';
import './App.css';
import ServiceDetailPage from '../pages/service-detail/ServiceDetailPage';
import ProfilePage from '../pages/profile-page/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <div className="main-content"> {/* Добавляем класс main-content */}
        <Routes>
          <Route path={AppPaths.main} element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path={AppPaths.services} element={<ServicesPage />} />
            <Route path={`${AppPaths.services}/:id`} element={<ServiceDetailPage />} /> {/* Новый маршрут */}
            <Route path='user/:id' element={<ProfilePage />} /> {/* Новый маршрут */}
            <Route path={AppPaths.auth} element={<LoginPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;