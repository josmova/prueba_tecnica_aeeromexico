import React from 'react';
import { Container, Section, SectionLink } from '../../styles/organisms/FlightSearchSection.styles';
import Title from '../atoms/Title';
import Subtitle from '../atoms/Subtitle';
import TabNavigation from '../molecules/TabNavigation';
import FlightSearchForm from '../molecules/FlightSearchForm';
import DestinationSearchForm from '../molecules/DestinationSearchForm';
import Button from '../atoms/Button';
import Link from '../atoms/Link';

interface FlightSearchSectionProps {
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

const FlightSearchSection: React.FC<FlightSearchSectionProps> = ({
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
      <Section>
        <Title>Track your flight</Title>
        <Subtitle>Keep you informed in real time!</Subtitle>
        <TabNavigation activeTab={activeTab} onTabPress={onTabPress} />
        {activeTab === 'flightNumber' ? (
          <FlightSearchForm
            flightNumber={flightNumber}
            setFlightNumber={setFlightNumber}
            date={date}
            setDate={setDate}
          />
        ) : (
          <DestinationSearchForm
            origin={origin}
            setOrigin={setOrigin}
            destination={destination}
            setDestination={setDestination}
            date={date}
            setDate={setDate}
          />
        )}
        <Button onPress={onSearch}>Search Flights</Button>
        <SectionLink>
          {activeTab === 'flightNumber' ? (
            <Link onPress={() => onTabPress('destination')}>
              Can't find your flight number? Try searching by destination
            </Link>
          ) : (
            <Link onPress={() => onTabPress('flightNumber')}>
              Looking for a specific flight? Try searching by flight number
            </Link>
          )}
        </SectionLink>
      </Section>
    </Container>
  );
};

export default FlightSearchSection;
