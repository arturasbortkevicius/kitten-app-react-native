import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { connect, useDispatch } from "react-redux";
import { showKittens } from "../store/actions/index";
import NumberOfItems from "../components/NumberOfItems";
import KittenCard from "../components/KittenCard";
import faker from "faker";
import NumberInput from "../components/NumberInput";

const KittenListScreen = ({ navigation, kittens }) => {
  const dispatch = useDispatch();
  const handleKittenData = (amount) => {
    let kittenArray = [];
    for (let i = 1; i <= amount; i++) {
      kittenArray.push({
        id: i,
        name: faker.name.firstName(),
        url: `http://placekitten.com/500/300?image=${
          Math.floor(Math.random() * 16) + 1
        }`,
      });
    }
    dispatch(showKittens(kittenArray));
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true}></StatusBar>
      <View style={styles.numberListStyle}>
        <NumberOfItems
          number={30}
          handleOnPress={handleKittenData}
        ></NumberOfItems>
        <NumberOfItems
          number={50}
          handleOnPress={handleKittenData}
        ></NumberOfItems>
        <NumberOfItems
          number={100}
          handleOnPress={handleKittenData}
        ></NumberOfItems>
        <NumberInput handleOnPress={handleKittenData}></NumberInput>
      </View>
      <View style={styles.listViewStyle}>
        <FlatList
          data={kittens}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("KittenInfo", {
                    name: item.name,
                    url: item.url,
                  })
                }
              >
                <KittenCard name={item.name} url={item.url}></KittenCard>
              </TouchableOpacity>
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  kittens: state.kittens,
});

export default connect(mapStateToProps)(KittenListScreen);

const styles = StyleSheet.create({
  numberListStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  listViewStyle: {
    marginBottom: 75,
  },
});
