import React from "react";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { Provider as StateProvider } from "react-redux";
import "react-native-gesture-handler";
import store from "./src/shared/data";
import NavigationContainer from "./src/components/Navigation/NavigationContainer";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#007aff",
    card: "",
    border: "",
  },
};

export default function App() {
  return (
    <StateProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme} />
      </PaperProvider>
    </StateProvider>
  );
}
