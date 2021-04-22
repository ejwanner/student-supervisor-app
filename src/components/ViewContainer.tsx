import React from "react";
import { StyleSheet, View } from "react-native";
import { Appbar } from "react-native-paper";

type ViewContainerProps = {
  title: string;
  hasBackNavigation?: boolean;
};

const ViewContainer: React.FC<ViewContainerProps> = ({
  title,
  hasBackNavigation,
  children,
}) => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        {hasBackNavigation && <Appbar.BackAction />}
        <Appbar.Content title={title} />
      </Appbar.Header>
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
  },
});

export default ViewContainer;
