import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 10,

    shadowColor: COLORS.grey,
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  innerContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  textHeader: {
    marginBottom: 5,
  },
  textContainer: {
    margin: 18,
    gap: 5,
  },
  postImage: {
    height: 200,
    width: '100%',
  },
});
