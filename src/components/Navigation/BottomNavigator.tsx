import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import {
  ChatStackNavigator,
  MyStackNavigator,
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
        name="My Area"
        component={MyStackNavigator}
        options={{ tabBarIcon: "account-circle" }}
      />
      <Tab.Screen
        name="Explore"
        component={ThesisOverviewStackNavigator}
        options={{
          tabBarIcon: "compass",
        }}
      />
      <Tab.Screen
        name="Messages"
        component={ChatStackNavigator}
        options={{
          tabBarIcon: "message",
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
