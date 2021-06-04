import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../views/Login";
import Register from "../../views/Register";
import ThesisOverview from "../../views/ThesisOverview";
import Header from "../Header";
import Settings from "../../views/Settings";
import ThesisDetail from "../../views/ThesisDetail";
import Chat from "../../views/Chat";
import UserList from "../../views/UserList";

const Stack = createStackNavigator();

const StackNavigator: React.FC = ({ children }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
    >
      {children}
    </Stack.Navigator>
  );
};

export const AuthStackNavigator: React.FC = () => {
  return (
    <StackNavigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </StackNavigator>
  );
};

export const ThesisOverviewStackNavigator: React.FC = () => {
  return (
    <StackNavigator>
      <Stack.Screen name="Thesis Overview" component={ThesisOverview} />
      <Stack.Screen name="Thesis Detail" component={ThesisDetail} />
    </StackNavigator>
  );
};

export const SettingsStackNavigator: React.FC = () => {
  return (
    <StackNavigator>
      <Stack.Screen name="Settings" component={Settings} />
    </StackNavigator>
  );
};

export const ChatStackNavigator: React.FC = () => {
  return (
    <StackNavigator>
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="User List" component={UserList} />
    </StackNavigator>
  );
};
