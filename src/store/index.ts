import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { flightsApi } from './services/flightsApi';
import flightsReducer from './slices/flightsSlice';

export const store = configureStore({
  reducer: {
    [flightsApi.reducerPath]: flightsApi.reducer,
    flights: flightsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(flightsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
