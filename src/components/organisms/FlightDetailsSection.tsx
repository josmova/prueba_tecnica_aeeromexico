import React from 'react';
import {
  DetailsContainer,
  SectionTitle,
  SectionHeaderDeparture,
  SectionHeaderDepartureCity,
  SectionTitleCity,
  DetailsSection,
  DataDetailRow,
  SectionHeader,
  DetailRow,
  DetailLabel,
  DetailValue,
} from '../../styles/organisms/FlightDetailsSection.styles';
import { FontAwesome } from '@expo/vector-icons';

interface FlightDetailsSectionProps {
  departureDetails: {
    terminal: string;
    gate: string;
    boarding: string;
  };
  arrivalDetails: {
    terminal: string;
    estimatedLanding: string;
  };
}

const FlightDetailsSection: React.FC<FlightDetailsSectionProps> = ({
  departureDetails,
  arrivalDetails,
}) => {
  return (
    <DetailsContainer>
      <SectionTitle>Flight details</SectionTitle>
      <DetailsSection>
        <SectionHeader>
          <SectionHeaderDeparture>
            <FontAwesome name="plane" size={20} color="black" />
            <SectionTitle>Departure</SectionTitle>
          </SectionHeaderDeparture>
          <SectionHeaderDepartureCity>
            <SectionTitleCity>Ciudad de México - AICM</SectionTitleCity>
          </SectionHeaderDepartureCity>
        </SectionHeader>
        <DataDetailRow>
          <DetailRow>
            <DetailLabel>Terminal</DetailLabel>
            <DetailValue>{departureDetails.terminal}</DetailValue>
          </DetailRow>

          <DetailRow>
            <DetailLabel>Gate</DetailLabel>
            <DetailValue>{departureDetails.gate}</DetailValue>
          </DetailRow>

          <DetailRow>
            <DetailLabel>Boarding</DetailLabel>
            <DetailValue>{departureDetails.boarding}</DetailValue>
          </DetailRow>
        </DataDetailRow>
      </DetailsSection>

      <DetailsSection>
        <SectionHeader>
          <SectionHeaderDeparture>
            <FontAwesome name="plane" size={20} color="black" />
            <SectionTitle>Arrival</SectionTitle>
          </SectionHeaderDeparture>
        </SectionHeader>
        <DataDetailRow>
          <DetailRow>
            <DetailLabel>Terminal</DetailLabel>
            <DetailValue>{arrivalDetails.terminal}</DetailValue>
          </DetailRow>

          <DetailRow>
            <DetailLabel>Est. Landing</DetailLabel>
            <DetailValue>{arrivalDetails.estimatedLanding}</DetailValue>
          </DetailRow>
        </DataDetailRow>
      </DetailsSection>
    </DetailsContainer>
  );
};

export default FlightDetailsSection;
