// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './components/pages/profile-page/ProfileSlice'; // Импортируйте редьюсер правильно

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

export default store;