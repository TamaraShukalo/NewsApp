import React from 'react';
import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {styles} from './styles';

type Props = {
  title: string;
  isDisabled?: boolean;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};

export const Button = ({
  title,
  isDisabled = false,
  onPress,
  containerStyle,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={[
        styles.button,
        isDisabled && styles.buttonDisabled,
        containerStyle,
      ]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
