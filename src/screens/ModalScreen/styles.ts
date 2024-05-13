import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  modal: {
    backgroundColor: COLORS.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  line: {
    marginTop: 15,
    alignSelf: 'center',
  },
  buttons: {
    padding: 35,
    gap: 16,
  },
});
