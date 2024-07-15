import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { StyledInputContainer, StyledInputLabel, StyledTextInput, CalendarIcon } from '../../styles/atoms/DateInput.styles';

interface DateInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
}

const DateInput: React.FC<DateInputProps> = ({ placeholder, value, onChangeText, containerStyle, inputStyle, labelStyle }) => {
  return (
    <StyledInputContainer style={containerStyle}>
      <StyledInputLabel style={labelStyle}>{placeholder}</StyledInputLabel>
      <StyledTextInput 
        placeholder={placeholder} 
        value={value} 
        onChangeText={onChangeText}
        style={inputStyle}
      />
      <CalendarIcon name="calendar" />
    </StyledInputContainer>
  );
};

export default DateInput;
