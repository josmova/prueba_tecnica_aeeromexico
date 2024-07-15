import React from 'react';
import { StyledButton, StyledButtonText } from '../../styles/atoms/Button.styles';

interface ButtonProps {
  onPress: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onPress, children }) => {
  return (
    <StyledButton onPress={onPress}>
      <StyledButtonText>{children}</StyledButtonText>
    </StyledButton>
  );
};

export default Button;
