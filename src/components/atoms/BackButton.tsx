import React from 'react';
import { Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const BackButton: React.FC = () => {
  return (
    <Pressable onPress={() => console.log('Go back')}>
      <AntDesign name="arrowleft" size={24} color="black" />
    </Pressable>
  );
};

export default BackButton;
