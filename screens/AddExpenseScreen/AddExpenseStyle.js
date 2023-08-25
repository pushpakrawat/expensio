import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "white",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    paddingLeft: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Distributes buttons evenly across the container
    marginBottom: 16,
     // Take 90% of the parent container width
    alignSelf: "center", // Center align the buttons
  },
  buttonWrapper: {
    flex: 1, // Distributes the available space equally between buttons
    marginHorizontal: 4, // Add a little space between buttons
    borderRadius: 8,
    overflow: "hidden", // Clip the button edges if they overflow
  },
  submitButtonWrapper: {
    width: "100%", // Take the full width of the parent container
    alignSelf: "center", // Center align the button
    borderRadius: 8,
    marginVertical: 10,
    overflow: "hidden", // Clip the button edges if they overflow
  },
  button: {
    backgroundColor: "black", // Set the background color for the button
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
