import {StyleSheet} from 'react-native';
import R from '../../resources/R';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty: {
    color: R.colors.prussianBlue,
    fontSize: 24,
    lineHeight: 30,
  },
  listContainer: {
    paddingHorizontal: 40,
  },
  itemContainer: {
    flexDirection: 'column',
    borderRadius: 15,
    backgroundColor: R.colors.vistaWhite,
    marginBottom: 10,
    padding: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {
    color: R.colors.prussianBlue,
    fontSize: 18,
    lineHeight: 20,
  },
  text: {
    color: R.colors.prussianBlue,
    fontSize: 14,
    lineHeight: 16,
    marginBottom: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginRight: 5,
    borderRadius: 50,
    backgroundColor: R.colors.prussianBlue,
  },
});
