import styled from 'styled-components/native';

export const CardContainer = styled.View`
  width: 100%;
  padding: 20px;
  align-items: center;
  /* background-color: blue; */
`;

export const CardHeader = styled.View`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
`;

export const CardBody = styled.View`
  width: 100%;
`;
export const CardContainerSimpleFlightHeader = styled.View`
  width: 70%;
  height: 100%;

`;

export const StatusContainer = styled.View`
display: flex;
justify-content: center;
align-self: center;
width: 30%;
  background-color: black;
  padding: 5px;
  border-radius: 5px;
`;

export const StatusText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
`;

export const InfoContainerDetails = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;


export const TimeTextDetails = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;


export const AirportTextDetails = styled.Text`
  font-size: 18px;
  color: #333;
`;

export const DurationText = styled.Text`
  font-size: 16px;
  color: gray;
`;


export const IconContainerDetails = styled.View`
  width: 125px;
  height: 20px;
  justify-content: center;
  /* align-items: center; */
`;



export const LineDetails = styled.View`
  position: absolute;
  z-index: 0;
  width: 125px;
  border-bottom-width: 2px;
  background-color: #000;
  border-style: dotted;
  margin: 0 10px;

`;


export const DurationContainerDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* margin-bottom: 10px; */
  padding-top: 10px;
  padding: 0 8px;
`;

