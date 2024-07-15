import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { 
  HeaderContainer, 
  BackButtonContainer, 
  FlightInfoContainer, 
  FlightNumberText, 
  DateContainer, 
  DateText, 
  Separator 
} from '../../styles/molecules/FlightHeader.styles';
import Link from '../atoms/Link';

interface FlightHeaderProps {
  flightNumber: string;
  date: string;
  onDateChange: () => void;
  onBackPress: () => void;
}

const FlightHeader: React.FC<FlightHeaderProps> = ({ flightNumber, date, onDateChange, onBackPress }) => {
  return (
    <HeaderContainer>
      <BackButtonContainer onPress={onBackPress}>
        <FontAwesome name="angle-left" size={24} color="black" />
      </BackButtonContainer>
      <FlightInfoContainer>
        <FlightNumberText>{flightNumber}</FlightNumberText>
        <DateContainer>
          <DateText>{date}</DateText>
          <Separator />
          <Link onPress={onDateChange} customStyles={{ color: '#333', marginTop: 0 }}>
            <FontAwesome name="calendar" size={16} color="black" /> Change
          </Link>
        </DateContainer>
      </FlightInfoContainer>
    </HeaderContainer>
  );
};

export default FlightHeader;
