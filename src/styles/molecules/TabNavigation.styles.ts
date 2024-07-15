import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;

export const TabButton = styled.TouchableOpacity<{ active: boolean }>`
  padding: 10px 20px;
  border-radius: 10px;  
  border: 1px solid #ccc;  
  background-color: ${(props) => (props.active ? 'black' : 'white')};  
  margin-right: 5px;  
  align-items: center;
`;

export const TabText = styled.Text<{ active: boolean }>`
  font-size: 16px;
  color: ${(props) => (props.active ? 'white' : 'black')}; 
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};  
`;
