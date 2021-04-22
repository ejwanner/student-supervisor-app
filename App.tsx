import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StateProvider } from "react-redux";
import Navigation from "./src/components/Navigation";
import store from "./src/shared/data";

export default function App() {
  return (
    <StateProvider store={store}>
      <PaperProvider>
        <View style={styles.container}>
          <Navigation />
        </View>
      </PaperProvider>
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
