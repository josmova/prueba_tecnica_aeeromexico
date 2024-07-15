import styled from 'styled-components/native';
import { Pressable } from 'react-native';

export const CardContainer = styled.View`
  width: 95%;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: #fff;
  margin: auto;
`;

export const StatusContainer = styled.View`
  width: 100%;
  height: 38px;
`;

export const StatusContainerText = styled.View`
  position: relative;
  top: -10px;
  left: 0;
  width: 90px;
  background-color: #000;
  padding: 5px 10px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 15px;
`;

export const StatusText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const BodyContainer = styled.View`
  width: 100%;
  margin: 10px auto;
`;

export const InfoContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const TimeText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const AirportText = styled.Text`
  font-size: 16px;
`;

export const DurationText = styled.Text`
  font-size: 16px;
  color: #666;
`;

export const FlightNumberText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const DetailsButton = styled(Pressable)`
  margin-top: 5px;
`;

export const DetailsButtonText = styled.Text`
  color: #333;
  text-decoration: underline;
`;

export const IconContainer = styled.View`
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
`;

export const BodyContent = styled.View`
  /* width: 100%; */
`;

export const DurationContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  padding-top: 10px;
`;

export const Line = styled.View`
  position: absolute;
  z-index: 0;
  width: 125px;
  height: 1px;
  background-color: #000;
`;

export const FooterContainer = styled.View`
  width: 100%;
  padding: 10px 26px;
  border-top-width: 5px;
  border-top-color: #d3d3d3; 
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
