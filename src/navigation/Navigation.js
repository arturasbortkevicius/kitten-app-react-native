import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import KittenInfoScreen from "../screens/KittenInfoScreen";
import KittenListScreen from "../screens/KittenListScreen";

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="KittenList"
          component={KittenListScreen}
          options={{
            title: "Choose your Kitten",
            headerStyle: {
              backgroundColor: "#C2185B",
            },
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => {
              return (
                <FontAwesome
                  name="paw"
                  size={26}
                  color="white"
                  style={{ paddingRight: 20 }}
                />
              );
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="KittenInfo"
          component={KittenInfoScreen}
          options={({ route }) => ({
            title: `Info about ${route.params.name}`,
            headerStyle: {
              backgroundColor: "#C2185B",
            },
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => {
              return (
                <FontAwesome5
                  name="cat"
                  size={26}
                  color="white"
                  style={{ paddingRight: 20 }}
                />
              );
            },
          })}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
