import React from 'react';
import {SearchInput} from '../SearchInput/SearchInput';
import {View} from 'react-native';
import {CircleButton} from '../CircleButton/CircleButton';
import {Add} from '../../assets/svg/Add';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/MainNavigation';
import {styles} from './styles';

type Props = {
  onSearch: (val: string) => void | undefined;
};

export const SearchHeader = ({onSearch}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <View style={styles.header}>
      <View style={styles.input}>
        <SearchInput placeholder="Search" onSearch={onSearch} />
      </View>
      <CircleButton
        onPress={() => {
          navigation.navigate('CreatePost');
        }}>
        <Add />
      </CircleButton>
    </View>
  );
};
