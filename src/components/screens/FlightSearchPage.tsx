import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import FlightSearchTemplate from '../templates/FlightSearchTemplate';
import { RootStackParamList } from '../../navigation/NavigationTypes';

type FlightSearchPageNavigationProp = StackNavigationProp<RootStackParamList, 'FlightSearch'>;

const FlightSearchPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flightNumber' | 'destination'>('flightNumber');
  const [flightNumber, setFlightNumber] = useState('AM 500'); 
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('2023-11-21'); 
  const navigation = useNavigation<FlightSearchPageNavigationProp>();

  const handleTabPress = (tab: 'flightNumber' | 'destination') => {
    setActiveTab(tab);
  };

  const handleSearch = () => {
    const searchParams = { flightNumber, origin, destination, date };
    console.log('searchParams', searchParams);
    navigation.navigate('FlightSearchResults', searchParams);
  };
  

  return (
    <FlightSearchTemplate 
      activeTab={activeTab}
      onTabPress={handleTabPress}
      onSearch={handleSearch}
      flightNumber={flightNumber}
      setFlightNumber={setFlightNumber}
      origin={origin}
      setOrigin={setOrigin}
      destination={destination}
      setDestination={setDestination}
      date={date}
      setDate={setDate}
    />
  );
};

export default FlightSearchPage;
