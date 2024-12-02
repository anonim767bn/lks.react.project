// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './components/pages/profile-page/ProfileSlice';
import servicesReducer from './store/servicesSlice'; // Импортируйте редьюсер услуг

const store = configureStore({
  reducer: {
    profile: profileReducer,
    services: servicesReducer, // Добавьте редьюсер услуг
  },
});

export default store;