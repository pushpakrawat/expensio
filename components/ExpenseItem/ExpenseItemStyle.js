import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: 0,
    marginVertical: 2,
    borderRadius: 0,
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    // shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 2,
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between", // Align items to the right
    marginBottom: 0,
  },
  title: {
    fontSize: 12,
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
    marginHorizontal:20,
  },
  thirdBox: {
    flexDirection: "row",
    alignItems: "center",
    verticalAlign: 'middle', 
    marginHorizontal:10,
  },
  fourthBox: {
    flexDirection: "row",
    marginBottom: 8,
    // alignItems: "center",
    // verticalAlign: 'middle', 
    // justifyContent:'center',
    marginHorizontal:10,
  },
  fifthBox: {
    flexDirection: "row",
    alignItems: "center",
    verticalAlign: 'middle', 
    marginHorizontal:10,
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
