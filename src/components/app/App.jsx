
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppPaths } from '../../constants';
import { Responses404 } from '@consta/uikit/Responses404';
import MainLayout from '../../layouts/main-layouts/MainLayout';

const MainPage = () => {
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppPaths.main} element={
          <MainLayout>
            <MainPage />
          </MainLayout>
        } />
        <Route path="*" element={<Responses404 />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App