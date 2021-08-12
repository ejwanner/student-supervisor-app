import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../views/Login";
import Register from "../../views/Register";
import ThesisOverview from "../../views/ThesisOverview";
import Header from "../Header";
import Settings from "../../views/Settings";
import ThesisDetail from "../../views/ThesisDetail";
import Chat from "../../views/Chat";
import UserList from "../UserList";
import Messenger from "../../views/Messenger";
import Filter from "../../views/Filter";
import MyThesis from "../../views/MyThesis";
import NewThesis from "../../views/NewThesis";
import NewConversation from "../../views/NewConversation";
import AddSupervisor from "../../views/AddSupervisor";

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
      <Stack.Screen name="Filter" component={Filter} />
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
      <Stack.Screen name="New Conversation" component={NewConversation} />
      <Stack.Screen name="Messenger" component={Messenger} />
    </StackNavigator>
  );
};

export const MyStackNavigator: React.FC = () => {
  return (
    <StackNavigator>
      <Stack.Screen name="My Thesis" component={MyThesis} />
      <Stack.Screen name="New Thesis" component={NewThesis} />
      <Stack.Screen name="Thesis Detail" component={ThesisDetail} />
      <Stack.Screen name="Add Supervisor" component={AddSupervisor} />
      <Stack.Screen name="Filter" component={Filter} />
    </StackNavigator>
  );
};
