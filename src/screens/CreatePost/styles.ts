import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    alignItems: 'center',
    marginRight: 20,
  },
  form: {
    flexGrow: 1,
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 30,
  },
  inputs: {
    flex: 1,
    gap: 5,
    marginBottom: 30,
  },
  messageInput: {
    minHeight: 120,
  },
  button: {
    backgroundColor: COLORS.blue,
    marginBottom: 50,
  },
});
