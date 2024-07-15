import React from 'react';
import { HeaderContainer, TitleText, ResultsText } from '../../styles/molecules/FlightResultsHeader.styles';

interface FlightResultsHeaderProps {
  title: string;
  resultsCount: number;
}

const FlightResultsHeader: React.FC<FlightResultsHeaderProps> = ({ title, resultsCount }) => {
  return (
    <HeaderContainer>
      <TitleText>{title}</TitleText>
      <ResultsText>{resultsCount} results</ResultsText>
    </HeaderContainer>
  );
};

export default FlightResultsHeader;
