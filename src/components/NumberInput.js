import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

const NumberInput = ({ handleOnPress }) => {
  const [state, setState] = useState(null);

  const handleInputNumber = (number) => {
    if (isNaN(number) || number < 1) {
      alert("Number has to be a number between 1 and 999.");
      setState(null);
    } else {
      handleOnPress(number);
      setState(null);
    }
  };

  return (
    <TextInput
      keyboardType="number-pad"
      style={styles.input}
      placeholder="Num"
      maxLength={3}
      onChangeText={(num) => setState(num)}
      value={state}
      onSubmitEditing={() => {
        handleInputNumber(state);
      }}
    ></TextInput>
  );
};

export default NumberInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#C2185B",
    paddingHorizontal: 20,
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
