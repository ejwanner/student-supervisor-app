import React from "react";
import { Text } from "react-native-paper";
import ViewContainer from "../components/ViewContainer";
import { StyleSheet } from "react-native";
import RegisterForm from "../components/forms/RegisterForm";
import { UserRegister } from "../shared/types";
import { registerUser } from "../shared/com";

type RegisterProps = {
  navigation: any;
};

const Register: React.FC<RegisterProps> = ({ navigation }) => {
  const onSubmit = (newUser: UserRegister) => {
    registerUser(newUser).then(() => navigation.navigate("Login"));
  };
  return (
    <ViewContainer>
      <Text style={styles.title}>Register</Text>
      <RegisterForm onSubmit={onSubmit} />
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

export default Register;
