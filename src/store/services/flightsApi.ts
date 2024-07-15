import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Flight } from '../../types/FlightsApiInterface';
import NumerodeVueloResponse from '../../../data/NumerodeVueloResponse.json';
import OrigenDestinoResponse from '../../../data/OrigenDestinoResponse.json';

export const flightsApi = createApi({
  reducerPath: 'flightsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    searchByFlightNumber: builder.query<Flight[], string>({
      queryFn: (flightNumber) => {
        const result: Flight[] = NumerodeVueloResponse.flatMap((response: { flightStatusCollection: Flight[] }) =>
          response.flightStatusCollection.filter((flight: Flight) => 
            flight.segment.operatingFlightCode === flightNumber.replace('AM ', '')
          )
        );
        return { data: result };
      },
    }),
    searchByOriginDestination: builder.query<Flight[], { origin: string; destination: string; date: string }>({
      queryFn: ({ origin, destination, date }) => {
        const result: Flight[] = OrigenDestinoResponse.flatMap((response: { flightStatusCollection: Flight[] }) =>
          response.flightStatusCollection.filter((flight: Flight) => 
            flight.segment.departureAirport === origin &&
            flight.segment.arrivalAirport === destination &&
            flight.segment.departureDateTime.startsWith(date)
          )
        );
        return { data: result };
      },
    }),
  }),
});

export const { useSearchByFlightNumberQuery, useSearchByOriginDestinationQuery } = flightsApi;
