// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './components/pages/profile-page/ProfileSlice';
import servicesReducer from './store/servicesSlice';
import newsReducer from './store/newsSlice'; // Импортируйте редьюсер новостей

const store = configureStore({
  reducer: {
    profile: profileReducer,
    services: servicesReducer,
    news: newsReducer, // Добавьте редьюсер новостей
  },
});

export default store;