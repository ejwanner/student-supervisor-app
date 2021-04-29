import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import {
  SettingsStackNavigator,
  ThesisOverviewStackNavigator,
} from "./StackNavigator";

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      shifting={true}
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="Thesis Overview"
        component={ThesisOverviewStackNavigator}
        options={{
          tabBarIcon: "book",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackNavigator}
        options={{
          tabBarIcon: "cog",
        }}
      />
    </Tab.Navigator>
  );
};
