import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const KittenCard = ({ name, url }) => {
  return (
    <View style={styles.kittenCardView}>
      <ImageBackground source={{ uri: url }} style={styles.image}>
        <Text style={styles.nameStyle}>{name} the cat</Text>
      </ImageBackground>
    </View>
  );
};

export default KittenCard;

const styles = StyleSheet.create({
  kittenCardView: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    margin: 10,
  },

  image: {
    height: 200,
    width: "100%",
    justifyContent: "flex-end",
  },
  nameStyle: {
    backgroundColor: "rgba(194, 24, 91,0.5)",
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    textTransform: "uppercase",
    width: "100%",
    textAlign: "center",
  },
});
