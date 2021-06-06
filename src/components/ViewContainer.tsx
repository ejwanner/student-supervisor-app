import React from "react";
import { StyleSheet, View } from "react-native";
import { Appbar } from "react-native-paper";

type ViewContainerProps = {};

const ViewContainer: React.FC<ViewContainerProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.pageContent}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  pageContent: {
    padding: 24,
    paddingBottom: 0,
    height: "100%",
  },
});

export default ViewContainer;
