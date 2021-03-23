import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const NumberOfItems = ({ number, handleOnPress }) => {
  return (
    <TouchableOpacity onPress={() => handleOnPress(number)}>
      <Text style={styles.numberItemStyle}>{number}</Text>
    </TouchableOpacity>
  );
};

export default NumberOfItems;

const styles = StyleSheet.create({
  numberItemStyle: {
    borderWidth: 1,
    borderColor: "#C2185B",
    paddingHorizontal: 30,
    paddingVertical: 5,
    marginVertical: 20,
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#C2185B",
    color: "white",
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
});
