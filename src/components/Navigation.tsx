import React from "react";
import { StyleSheet } from "react-native";
import { BottomNavigation } from "react-native-paper";
import ThesisOverview from "../views/ThesisOverview";
import Profile from "../views/Profile";

const ROUTES: Array<{ key: string; title: string; icon: string }> = [
  { key: "thesisOverview", title: "Thesis Overview", icon: "book" },
  { key: "profile", title: "Profile", icon: "account" },
];

const Navigation: React.FC = () => {
  const [routeIndex, setRouteIndex] = React.useState<number>(0);
  const [routes] = React.useState<
    Array<{ key: string; title: string; icon: string }>
  >(ROUTES);

  const renderScene = BottomNavigation.SceneMap({
    thesisOverview: ThesisOverview,
    profile: Profile,
  });

  return (
    <BottomNavigation
      navigationState={{ index: routeIndex, routes }}
      onIndexChange={setRouteIndex}
      renderScene={renderScene}
      style={styles.navigation}
    />
  );
};

const styles = StyleSheet.create({
  navigation: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
  },
});

export default Navigation;
