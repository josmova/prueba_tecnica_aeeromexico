import styled from 'styled-components/native';

export const DetailsContainer = styled.View`
  width: 100%;
  padding: 20px;
`;


export const SectionHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;


export const SectionHeaderDeparture = styled.Text`
flex:.5;
display: flex;
gap: 5px;
`;

export const SectionTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SectionHeaderDepartureCity = styled.Text`
flex:1;
`;

export const SectionTitleCity = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;


export const DetailsSection = styled.View`
  margin-bottom: 20px;
`;


export const DataDetailRow = styled.View`
  width: 100%;
 display: flex;
 flex-direction: row;
 justify-content: space-around;
`;


export const DetailRow = styled.View`
  flex-direction: column;
  /* justify-content: space-between; */
  /* margin-bottom: 5px; */
`;

export const DetailLabel = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const DetailValue = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;
