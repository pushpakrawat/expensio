import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 8,
    borderRadius: 16,
    padding: 20,
    width: "95%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between", // Align items to the right
    marginBottom: 0,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  recurring: {
    fontSize: 14,
    color: "gray",
  },
  firstBox: {
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  secondBox: {
    flexDirection: "row",
    alignItems: "center",
    verticalAlign: 'middle', 
  },
  thirdBox: {
    flexDirection: "row",
    alignItems: "center",
    verticalAlign: 'middle', 
  },
  fourthBox: {
    flexDirection: "row",
    marginBottom: 12,
    // alignItems: "center",
    // verticalAlign: 'middle', 
    // justifyContent:'center',
  },
  fifthBox: {
    flexDirection: "row",
    alignItems: "center",
    verticalAlign: 'middle', 
  },
  amount: {
    fontSize: 16,
    color: "#333",
    marginRight: 10, // Adjust spacing
  },
  date: {
    fontSize: 12,
    color: "grey",
    flex: 1, 
  },
  deleteButton: {
    alignSelf: "flex-end",
  },
  markPaidButton: {
    alignSelf: "flex-end",
  },
});

export default styles;
