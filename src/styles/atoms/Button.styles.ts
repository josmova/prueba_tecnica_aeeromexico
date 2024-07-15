import styled from 'styled-components/native';
import { Pressable } from 'react-native';

export const StyledButton = styled(Pressable)`
  background-color: black;
  padding: 16px 24px;
  border-radius: 8px; 
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 56px;
`;

export const StyledButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
`;
