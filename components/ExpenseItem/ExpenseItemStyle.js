import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    margin:5,
    padding: 16,
    marginVertical: 8,
    borderRadius: 16,
    width: '98%', // Make it wider to the screen
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  amount: {
    fontSize: 16,
    marginBottom: 4,
  },
  recurring: {
    fontSize: 14,
    marginBottom: 4,
    color: 'gray',
  },
  date: {
    fontSize: 14,
    color: 'gray',
  },
});

export default styles;
