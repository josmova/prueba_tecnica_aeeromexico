import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { RootStackParamList } from '../../navigation/NavigationTypes';
import {
  BodyContainer,
  CardContainer,
  StatusContainer,
  StatusText,
  InfoContainer,
  TimeText,
  AirportText,
  DurationText,
  FlightNumberText,
  DetailsButton,
  DetailsButtonText,
  IconContainer,
  DurationContainer,
  Line,
  StatusContainerText,
  FooterContainer,
} from '../../styles/molecules/FlightInfoCard.styles';

interface FlightInfoCardProps {
  status: string;
  departureTime: string;
  arrivalTime: string;
  departureAirport: string;
  arrivalAirport: string;
  duration: string;
  flightNumber: string;
  onDetailsPress?: () => void;
}

const FlightInfoCard: React.FC<FlightInfoCardProps> = ({
  status,
  departureTime,
  arrivalTime,
  departureAirport,
  arrivalAirport,
  duration,
  flightNumber,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleDetailsPress = () => {
    navigation.navigate('FlightDetails');
  };

  return (
    <CardContainer>
      <BodyContainer>
        <StatusContainer>
          <StatusContainerText>
            <StatusText>{status}</StatusText>
          </StatusContainerText>
        </StatusContainer>
        <InfoContainer>
          <TimeText>{departureTime}</TimeText>
          <IconContainer>
            <FontAwesome name="plane" size={20} color="black" />
            <Line />
          </IconContainer>
          <TimeText>{arrivalTime}</TimeText>
        </InfoContainer>
        <DurationContainer>
          <AirportText>{departureAirport}</AirportText>
          <DurationText>{duration}</DurationText>
          <AirportText>{arrivalAirport}</AirportText>
        </DurationContainer>
      </BodyContainer>
      <FooterContainer>
        <FlightNumberText>{flightNumber}</FlightNumberText>
        <DetailsButton onPress={handleDetailsPress}>
          <DetailsButtonText>Details</DetailsButtonText>
        </DetailsButton>
      </FooterContainer>
    </CardContainer>
  );
};

export default FlightInfoCard;
