import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppPaths } from '../../constants';
import NotFoundPage from '../pages/notFound-page/NotFoundPage';
import MainPage from '../pages/main-page/MainPage';
import ServicesPage from '../pages/services-page/ServicesPage';
import MainLayout from '../../layouts/main-layouts/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path={AppPaths.services} element={<ServicesPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;