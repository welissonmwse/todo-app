import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#262626',
    borderRadius: 8,
    padding: 12,
    marginTop: 20,
  },
  checkbox: {
    marginRight: 8,
    borderRadius: 99999,
  },
  text: {
    flex: 1,
    fontSize: 14,
    color: '#F2F2F2',
  },
  button: {
    marginLeft: 8,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  }
});