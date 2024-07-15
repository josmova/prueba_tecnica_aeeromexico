import styled from 'styled-components/native';
import { Pressable } from 'react-native';

export const StyledLink = styled(Pressable)<{ customStyles?: any }>`
  color: ${({ customStyles }) => customStyles?.color || '#666'};
  text-align: center;
  margin-top: ${({ customStyles }) => customStyles?.marginTop || '0px'};
  font-size: ${({ customStyles }) => customStyles?.fontSize || '14px'};
  font-weight: normal;
`;

export const StyledSpan = styled.Text<{ customStyles?: any }>`
  font-size: ${({ customStyles }) => customStyles?.fontSize || '12px'};
  font-weight: normal;
  color: ${({ customStyles }) => customStyles?.color || '#333'};
  text-decoration: underline;
`;
