import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Navigation from "./src/components/Navigation";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Navigation />
      </View>
    </PaperProvider>
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
