import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { StyledInputContainer, StyledInputLabel, StyledTextInput } from '../../styles/atoms/TextInput.styles';

interface TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
}

const TextInput: React.FC<TextInputProps> = ({ placeholder, value, onChangeText, containerStyle, inputStyle, labelStyle }) => {
  return (
    <StyledInputContainer style={containerStyle}>
      <StyledInputLabel style={labelStyle}>{placeholder}</StyledInputLabel>
      <StyledTextInput 
        placeholder={placeholder} 
        value={value} 
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </StyledInputContainer>
  );
};

export default TextInput;
