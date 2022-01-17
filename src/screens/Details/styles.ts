import {StyleSheet} from 'react-native';
import R from '../../resources/R';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  emptyItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyItem: {
    color: R.colors.prussianBlue,
    fontSize: 24,
    lineHeight: 30,
  },
  title: {
    color: R.colors.vistaWhite,
    fontSize: 24,
    lineHeight: 26,
    marginBottom: 5,
  },
  text: {
    color: R.colors.vistaWhite,
    fontSize: 16,
    lineHeight: 18,
    marginBottom: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginVertical: 10,
    borderRadius: 50,
    backgroundColor: R.colors.prussianBlue,
  },
  orgAvatar: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    backgroundColor: R.colors.white,
  },
  sectionContainer: {
    backgroundColor: R.colors.prussianBlue,
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 10,
    padding: 10,
  },
  sectionTitle: {
    color: R.colors.black,
    fontSize: 20,
    lineHeight: 22,
  },
});
