import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A'
  },
  header: {
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 173,
  },
  form: {
    flexDirection: 'row',
    marginTop: -24,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    padding: 16,
    borderRadius: 6,
    color: '#F2F2F2',
    fontSize: 16,
    marginRight: 10,
    borderColor: '#0D0D0D',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    padding: 20,
  },
  content: {
    flex: 1,
    marginTop: 12,
    paddingHorizontal: 24,

  },
  heading: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    borderStyle: 'solid'
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amount: {
    color: '#D9D9D9',
    fontSize: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginLeft: 10,
    backgroundColor: '#333333',
    borderRadius: 99999,
  }
});