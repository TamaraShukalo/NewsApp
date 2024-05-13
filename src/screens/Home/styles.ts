import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {font} from '../../utils/font';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  listContent: {
    flexGrow: 1,
    marginHorizontal: 30,
    paddingBottom: 20,
    gap: 40,
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
  },
  emptyListText: {
    textAlign: 'center',
    marginTop: 29,
    ...font(16, 24, 'regular', 'lightGrey'),
  },
});
