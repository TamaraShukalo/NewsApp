import {StyleSheet} from 'react-native';
import {font} from '../../utils/font';

export const styles = StyleSheet.create({
  button: {
    height: 63,
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonDisabled: {
    opacity: 0.3,
  },
  text: {
    ...font(24, 35, 'bold', 'white'),
    textAlign: 'center',
  },
});
