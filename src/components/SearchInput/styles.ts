import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {font} from '../../utils/font';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    backgroundColor: COLORS.grey15,
    borderRadius: 10,
    height: 48,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    height: '100%',
    ...font(16, 23, 'regular', 'grey'),
  },
  focusedInput: {
    borderColor: COLORS.lightGrey,
    borderWidth: 0.5,
  },
});
