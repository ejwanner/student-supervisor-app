import React from "react";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { Provider as StateProvider } from "react-redux";
import Toast from "react-native-toast-message";
import "react-native-gesture-handler";
import store from "./src/shared/data";
import NavigationContainer from "./src/components/Navigation/NavigationContainer";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#007aff",
    accent: "rgb(255, 167, 58)",
    card: "",
    border: "",
  },
};

export default function App() {
  return (
    <StateProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme} />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </PaperProvider>
    </StateProvider>
  );
}
