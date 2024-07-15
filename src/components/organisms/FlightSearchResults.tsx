import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { 
  HeaderContainer, 
  BackButtonContainer, 
  FlightInfoContainer, 
  FlightNumberText, 
  DateContainer, 
  DateText, 
  DateChangeContainer, 
  ChangeText 
} from '../../styles/molecules/FlightHeader.styles';
import { Pressable } from 'react-native';

interface FlightHeaderProps {
  flightNumber: string;
  date: string;
  onDateChange: () => void;
}

const FlightHeader: React.FC<FlightHeaderProps> = ({ flightNumber, date, onDateChange }) => {
  return (
    <HeaderContainer>
      <BackButtonContainer>
        <FontAwesome name="angle-left" size={24} color="black" />
      </BackButtonContainer>
      <FlightInfoContainer>
        <FlightNumberText>{flightNumber}</FlightNumberText>
        <DateContainer>
          <DateText>{date}</DateText>
          <Pressable onPress={onDateChange}>
            <DateChangeContainer>
              <FontAwesome name="calendar" size={16} color="black" />
              <ChangeText>Change</ChangeText>
            </DateChangeContainer>
          </Pressable>
        </DateContainer>
      </FlightInfoContainer>
    </HeaderContainer>
  );
};

export default FlightHeader;
