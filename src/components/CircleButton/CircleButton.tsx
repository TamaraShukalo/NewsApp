import React from 'react';
import {Pressable} from 'react-native';
import {styles} from './styles';

type Props = {
  children: React.ReactNode;
  onPress: () => void;
};

export const CircleButton = ({onPress, children}: Props) => {
  return (
    <Pressable onPress={() => onPress()} style={styles.container}>
      {children}
    </Pressable>
  );
};
