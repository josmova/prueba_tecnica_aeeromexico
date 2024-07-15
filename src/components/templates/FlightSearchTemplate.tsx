import React from 'react';
import { Container } from '../../styles/templates/FlightSearchTemplate.styles';
import FlightSearchSection from '../organisms/FlightSearchSection';

interface FlightSearchTemplateProps {
  activeTab: 'flightNumber' | 'destination';
  onTabPress: (tab: 'flightNumber' | 'destination') => void;
  onSearch: () => void;
  flightNumber: string;
  setFlightNumber: (value: string) => void;
  origin: string;
  setOrigin: (value: string) => void;
  destination: string;
  setDestination: (value: string) => void;
  date: string;
  setDate: (value: string) => void;
}

const FlightSearchTemplate: React.FC<FlightSearchTemplateProps> = ({
  activeTab,
  onTabPress,
  onSearch,
  flightNumber,
  setFlightNumber,
  origin,
  setOrigin,
  destination,
  setDestination,
  date,
  setDate,
}) => {
  return (
    <Container>
      <FlightSearchSection
        activeTab={activeTab}
        onTabPress={onTabPress}
        onSearch={onSearch}
        flightNumber={flightNumber}
        setFlightNumber={setFlightNumber}
        origin={origin}
        setOrigin={setOrigin}
        destination={destination}
        setDestination={setDestination}
        date={date}
        setDate={setDate}
      />
    </Container>
  );
};

export default FlightSearchTemplate;
