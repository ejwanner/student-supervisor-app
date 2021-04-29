import React from "react";
import { Text } from "react-native-paper";
import ViewContainer from "../components/ViewContainer";
import { StyleSheet } from "react-native";
import SignInForm from "../components/forms/SignInForm";
import { MOCK_USER } from "../shared/constants";

type LoginProps = {
  // here define props
  navigation: any;
};

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const submit = (data: any) => {
    console.log("login", data);
  };

  const navigateToRegister = () => {
    navigation.navigate("Register");
  };
  return (
    <ViewContainer>
      <Text style={styles.title}>LOGIN</Text>
      <SignInForm
        user={MOCK_USER}
        navigateToRegister={navigateToRegister}
        onSubmit={submit}
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
