import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#007bff',
  },
  button: {
    padding: 8,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'transparent',
    marginLeft: 8,
    marginRight: 10,
  },
  dateContainer: {
    flex: 1,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  goToCurrentButton: {
    backgroundColor: 'transparent',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
});

export default styles;
