import React, { useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSearchByFlightNumberQuery, useSearchByOriginDestinationQuery } from '../../store/services/flightsApi';
import { setSelectedFlight } from '../../store/slices/flightsSlice';
import FlightSearchResultsTemplate from '../templates/FlightSearchResultsTemplate';
import { RootStackParamList } from '../../navigation/NavigationTypes';
import { StackNavigationProp } from '@react-navigation/stack';

interface RouteParams {
  flightNumber?: string;
  origin?: string;
  destination?: string;
  date?: string;
}

type FlightSearchResultsNavigationProp = StackNavigationProp<RootStackParamList, 'FlightDetails'>;

const FlightSearchResultsPage: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation<FlightSearchResultsNavigationProp>();
  const dispatch = useDispatch();
  const { flightNumber, origin, destination, date } = route.params as RouteParams;

  const queryResult = flightNumber
    ? useSearchByFlightNumberQuery(flightNumber)
    : useSearchByOriginDestinationQuery({ origin: origin || '', destination: destination || '', date: date || '' });

  const { data: flightData = [], error: flightError, isLoading: flightLoading } = queryResult;

  useEffect(() => {
    console.log("paso de datos", flightData);
  }, [flightData]);

  if (flightLoading) return <View><Text>Loading...</Text></View>;
  if (flightError) return <View><Text>Error loading flight data</Text></View>;

  const handleDetailsPress = (flight: any) => {
    console.log("Navigating to details with flight:", flight);
    dispatch(setSelectedFlight(flight));
    navigation.navigate('FlightDetails'); 
  };

  return (
    <FlightSearchResultsTemplate 
      flightNumber={flightNumber || ''}
      date={date || ''}
      onDateChange={() => {}}
      onBackPress={() => navigation.goBack()}
      flightInfo={flightData.map(flight => ({
        status: flight.status,
        departureTime: flight.segment.departureDateTime,
        arrivalTime: flight.segment.arrivalDateTime,
        departureAirport: flight.segment.departureAirport,
        arrivalAirport: flight.segment.arrivalAirport,
        duration: `${Math.floor(flight.segment.flightDurationInMinutes / 60)}h ${flight.segment.flightDurationInMinutes % 60}m`,
        flightNumber: `${flight.segment.operatingCarrier} ${flight.segment.operatingFlightCode}`,
        onDetailsPress: () => handleDetailsPress(flight)
      }))}
    />
  );
};

export default FlightSearchResultsPage;
