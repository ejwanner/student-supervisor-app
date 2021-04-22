import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Navigation from "./src/components/Navigation";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./src/views/Login";
import ThesisOverview from "./src/views/ThesisOverview";
import Register from "./src/views/Register";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="ThesisOverview" component={ThesisOverview}/>
            </Stack.Navigator>

        </NavigationContainer>
        {/* <View style={styles.container}>
            <Navigation />
        </View> */}
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
