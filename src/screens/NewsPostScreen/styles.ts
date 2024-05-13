import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {font} from '../../utils/font';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 10,
  },
  postImage: {
    position: 'absolute',
    width: '100%',
    height: 300,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  articleContainer: {
    flexGrow: 1,
    marginTop: 250,
    paddingVertical: 26,
    paddingHorizontal: 30,
    backgroundColor: COLORS.white,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  publishedAtText: {
    marginBottom: 15,
  },
  contentText: {
    ...font(16, 22, 'light', 'black'),
  },
});
