import React from "react";
import { Text } from "react-native-paper";
import ViewContainer from "../components/ViewContainer";
import { StyleSheet } from "react-native";
import SignInForm from "../components/forms/SignInForm";

type LoginProps = {
  // here define props
  navigation: any;
};

const Login: React.FC<LoginProps> = ({ navigation }) => {

  const navigateToRegister = () => {
    navigation.navigate("Register");
  };
  return (
    <ViewContainer>
      <Text style={styles.title}>LOGIN</Text>
      <SignInForm
        navigateToRegister={navigateToRegister}
      />
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: "35%",
  },
});

export default Login;
