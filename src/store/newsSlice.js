// src/store/newsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getNewsListAction } from './ApiActions';

// Асинхронный thunk для получения списка новостей
export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const response = await getNewsListAction();
  return response;
});

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;