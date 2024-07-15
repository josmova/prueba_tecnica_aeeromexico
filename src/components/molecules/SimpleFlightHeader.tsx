import React from 'react';
import {
  HeaderContainer,
  FlightInfoContainer,
  FlightNumberText,
  DateContainer,
  DateText,
} from '../../styles/molecules/SimpleFlightHeader.styles';

interface SimpleFlightHeaderProps {
  flightNumber: string;
  date: string;
  onBackPress: () => void;
}

const SimpleFlightHeader: React.FC<SimpleFlightHeaderProps> = ({
  flightNumber,
  date,
}) => {
  return (
    <HeaderContainer>
      <FlightInfoContainer>
        <FlightNumberText>{flightNumber}</FlightNumberText>
        <DateContainer>
          <DateText>{date}</DateText>
        </DateContainer>
      </FlightInfoContainer>
    </HeaderContainer>
  );
};

export default SimpleFlightHeader;
