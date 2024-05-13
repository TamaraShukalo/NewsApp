import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {CircleButton} from '../CircleButton/CircleButton';
import {ArrowLeft} from '../../assets/svg/ArrowLeft';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/MainNavigation';
import {styles} from './styles';

type Props = {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
};

export const Header = ({children, containerStyle}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <View style={[styles.headerContainer, containerStyle]}>
      <CircleButton onPress={() => navigation.goBack()}>
        <ArrowLeft />
      </CircleButton>
      {children}
    </View>
  );
};
