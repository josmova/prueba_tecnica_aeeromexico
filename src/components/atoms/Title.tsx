import React from 'react';
import { StyledTitle } from '../../styles/atoms/Title.styles';

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
