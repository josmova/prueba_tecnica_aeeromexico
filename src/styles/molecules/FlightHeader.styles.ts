import styled from 'styled-components/native';
import { Pressable } from 'react-native';

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #fff;
`;

export const BackButtonContainer = styled(Pressable)`
  padding: 10px;
`;

export const FlightInfoContainer = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const FlightNumberText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333; 
  margin-right: 10px;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const DateText = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const DateChangeContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ChangeText = styled.Text`
  font-size: 16px;
  color: #333;
  text-decoration: underline;
`;

export const Separator = styled.View`
  height: 20px;
  width: 1px;
  background-color: #d3d3d3; 
  margin: 0 10px; 
`;
