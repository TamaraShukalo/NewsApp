import React from 'react';
import {StyleProp, Text, TextStyle, View, ViewStyle} from 'react-native';
import {styles} from './styles';

type Props = {
  title: string;
  type: number;
  numberOfLines?: number;
  containerStyle?: StyleProp<ViewStyle>;
};

const textStyle: {[key: number]: TextStyle} = {
  1: styles.text1,
  2: styles.text2,
  3: styles.text3,
};

export const Title = ({title, type, numberOfLines, containerStyle}: Props) => {
  const styleToApply = textStyle[type] || styles.text1;

  return (
    <View style={containerStyle}>
      <Text style={styleToApply} numberOfLines={numberOfLines}>
        {title}
      </Text>
    </View>
  );
};
