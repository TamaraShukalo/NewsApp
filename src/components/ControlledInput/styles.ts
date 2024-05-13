import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {font} from '../../utils/font';

export const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.grey15,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingTop: 16,
    textAlignVertical: 'top',
    minHeight: 60,
    ...font(16, 23, 'regular', 'black'),
  },
  focusedInput: {
    borderColor: COLORS.lightGrey,
    borderWidth: 0.5,
  },
  errorContainer: {
    minHeight: 20,
    justifyContent: 'center',
  },
  errorText: {
    marginTop: 5,
    marginLeft: 30,
    ...font(12, null, 'regular', 'coral'),
  },
});
