import {StyleSheet} from 'react-native';
import {font} from '../../utils/font';

export const styles = StyleSheet.create({
  text1: {
    ...font(20, 23, 'bold', 'black'),
  },
  text2: {
    ...font(16, 16, 'light', 'black'),
  },
  text3: {
    ...font(12, 21, 'light', 'grey'),
  },
});
