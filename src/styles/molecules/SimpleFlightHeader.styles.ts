import styled from 'styled-components/native';
import { Pressable } from 'react-native';

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
`;


export const FlightInfoContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const FlightNumberText = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DateText = styled.Text`
  font-size: 18px;
  color: #888;
`;


