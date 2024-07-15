import React from 'react';
import { ImageBackgroundProps } from 'react-native';
import { BackgroundImage as StyledBackgroundImage } from '../../styles/atoms/BackgroundImage.styles';

interface CustomBackgroundImageProps extends ImageBackgroundProps {
  source: any;
}

const BackgroundImage: React.FC<CustomBackgroundImageProps> = ({ source, children, ...props }) => {
  return (
    <StyledBackgroundImage source={source} {...props}>
      {children}
    </StyledBackgroundImage>
  );
};

export default BackgroundImage;
