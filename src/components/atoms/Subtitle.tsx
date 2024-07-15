import React from 'react';
import { StyledSubtitle } from '../../styles/atoms/Subtitle.styles';

interface SubtitleProps {
  children: React.ReactNode;
}

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return <StyledSubtitle>{children}</StyledSubtitle>;
};

export default Subtitle;
