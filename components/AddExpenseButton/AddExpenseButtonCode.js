import { useNavigation } from '@react-navigation/native';

const AddExpenseButtonCode = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('AddExpense');
  };

  return {
    handlePress,
  };
};

export default AddExpenseButtonCode;
