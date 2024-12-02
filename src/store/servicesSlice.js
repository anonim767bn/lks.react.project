// src/store/servicesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getServicesListAction } from './ApiActions';

// Асинхронный thunk для получения списка услуг
export const fetchServices = createAsyncThunk('services/fetchServices', async () => {
  const response = await getServicesListAction();
  return response;
});

const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default servicesSlice.reducer;