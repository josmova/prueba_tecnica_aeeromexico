import React from 'react';
import { ScrollView, Text } from 'react-native';
import DetailedFlightInfoCard from '../molecules/DetailedFlightInfoCard';
import FlightDetailsSection from '../organisms/FlightDetailsSection';
import BackgroundImage from '../atoms/BackgroundImage';
import { Container, CardWrapper, CardWrapperBody } from '../../styles/screens/FlightDetailsPage.styles';

const FlightDetailsPage: React.FC = () => {

  const flightDetails = {
    flightNumber: 'AM 500',
    date: 'Tuesday, Nov 21',
    status: 'Arrived',
    departureTime: '06:24',
    arrivalTime: '09:21',
    departureAirport: 'MEX',
    arrivalAirport: 'CUN',
    duration: '2h 28m',
    departureDetails: {
      terminal: '2',
      gate: '62',
      boarding: '06:00',
    },
    arrivalDetails: {
      terminal: '4',
      estimatedLanding: '09:21',
    },
  };

  const onBackPress = () => {
 
  };

  return (
    <Container>
      <BackgroundImage 
        source={{ uri: 'https://plus.unsplash.com/premium_photo-1681552900042-5b5881fed356?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} 
      />
      <CardWrapperBody>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          <CardWrapper>
            <DetailedFlightInfoCard
              status={flightDetails.status}
              departureTime={flightDetails.departureTime}
              arrivalTime={flightDetails.arrivalTime}
              departureAirport={flightDetails.departureAirport}
              arrivalAirport={flightDetails.arrivalAirport}
              duration={flightDetails.duration}
              flightNumber={flightDetails.flightNumber}
              date={flightDetails.date}
              onBackPress={onBackPress}
            />
            <FlightDetailsSection
              departureDetails={flightDetails.departureDetails}
              arrivalDetails={flightDetails.arrivalDetails}
            />
          </CardWrapper>
        </ScrollView>
      </CardWrapperBody>
    </Container>
  );
};

export default FlightDetailsPage;
