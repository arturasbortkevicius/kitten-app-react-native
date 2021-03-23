import React from "react";
import { Navigation } from "./src/navigation/Navigation";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { getKittenReducer } from "./src/store/reducers/index";
import { useNetInfo } from "@react-native-community/netinfo";

const store = createStore(getKittenReducer);

export default function App() {
  const netInfo = useNetInfo();
  if (netInfo.isConnected === false) {
    alert("Couldn't connect to the internet");
  }
  return (
    <Provider store={store}>
      <Navigation></Navigation>
    </Provider>
  );
}
