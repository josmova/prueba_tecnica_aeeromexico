import React from 'react';
import { StyledLink, StyledSpan } from '../../styles/atoms/Link.styles';

interface LinkProps {
  onPress: () => void;
  children: React.ReactNode;
  customStyles?: any;
}

const Link: React.FC<LinkProps> = ({ onPress, children, customStyles }) => {
  return (
    <StyledLink onPress={onPress} customStyles={customStyles}>
      <StyledSpan customStyles={customStyles}>{children}</StyledSpan>
    </StyledLink>
  );
};

export default Link;
