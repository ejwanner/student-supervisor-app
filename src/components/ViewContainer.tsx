import React from "react";
import { StyleSheet, View } from "react-native";

const ViewContainer: React.FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 24,
    paddingTop: 54,
  },
});

export default ViewContainer;
