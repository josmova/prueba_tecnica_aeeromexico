import styled from 'styled-components/native';

export const StyledInputContainer = styled.View<{ customStyles?: any }>`
  border: ${({ customStyles }) => customStyles?.border || '1px solid black'};
  padding: ${({ customStyles }) => customStyles?.padding || '10px'};
  border-radius: ${({ customStyles }) => customStyles?.borderRadius || '10px'};
  width: ${({ customStyles }) => customStyles?.width || '48%'};
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({ customStyles }) => customStyles?.marginBottom || '20px'};
  position: relative;
`;

export const StyledInputLabel = styled.Text<{ customStyles?: any }>`
  color: ${({ customStyles }) => customStyles?.color || 'gray'};
  font-size: ${({ customStyles }) => customStyles?.fontSize || '12px'};
  position: absolute;
  top: -10px;
  left: 10px;
  background-color: white;
  padding: 0 5px;
`;

export const StyledTextInput = styled.TextInput<{ customStyles?: any }>`
  font-size: ${({ customStyles }) => customStyles?.fontSize || '16px'};
  font-weight: ${({ customStyles }) => customStyles?.fontWeight || 'bold'};
  flex: 1;
  margin-right: 10px;
`;
