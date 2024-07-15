import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { format } from 'date-fns';
import FlightHeader from '../molecules/FlightHeader';
import FlightInfoCard from '../molecules/FlightInfoCard';
import FlightResultsHeader from '../molecules/FlightResultsHeader';
import { Container } from '../../styles/organisms/FlightSearchResults.styles';

interface FlightInfo {
  status: string;
  departureTime: string;
  arrivalTime: string;
  departureAirport: string;
  arrivalAirport: string;
  duration: string;
  flightNumber: string;
  onDetailsPress: () => void;
}

interface FlightSearchResultsTemplateProps {
  flightNumber: string;
  date: string;
  onDateChange: () => void;
  onBackPress: () => void;
  flightInfo: FlightInfo[];
}

const FlightSearchResultsTemplate: React.FC<FlightSearchResultsTemplateProps> = ({
  flightNumber,
  date,
  onDateChange,
  onBackPress,
  flightInfo,
}) => {
  const formattedDate = format(new Date(date), 'eeee, MMM d'); 

  return (
    <Container>
      <FlightHeader 
        flightNumber={flightNumber} 
        date={formattedDate} 
        onDateChange={onDateChange} 
        onBackPress={onBackPress}
      />
      <FlightResultsHeader title="Mexico City to Cancún" resultsCount={flightInfo.length} />
      <ScrollView>
        {flightInfo.map((info, index) => (
          <FlightInfoCard
            key={index}
            status={info.status}
            departureTime={format(new Date(info.departureTime), 'HH:mm')}
            arrivalTime={format(new Date(info.arrivalTime), 'HH:mm')}
            departureAirport={info.departureAirport}
            arrivalAirport={info.arrivalAirport}
            duration={info.duration}
            flightNumber={info.flightNumber}
            onDetailsPress={info.onDetailsPress}
          />
        ))}
      </ScrollView>
    </Container>
  );
};

export default FlightSearchResultsTemplate;
