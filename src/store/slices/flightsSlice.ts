import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Flight, FlightsState } from '../../types/FlightsApiInterface';

const initialState: FlightsState = {
  favorites: [],
  selectedFlight: null,
};

const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Flight>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(flight => flight.segment.operatingFlightCode !== action.payload);
    },
    setSelectedFlight: (state, action: PayloadAction<Flight>) => {
      state.selectedFlight = action.payload;
    },
  },
});

export const { addFavorite, removeFavorite, setSelectedFlight } = flightsSlice.actions;
export default flightsSlice.reducer;
