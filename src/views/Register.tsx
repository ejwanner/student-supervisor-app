import React from "react";
import { Text } from "react-native-paper";
import ViewContainer from "../components/ViewContainer";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import RegisterForm from "../components/forms/RegisterForm";
import { MOCK_USER_2 } from "../shared/constants";

type RegisterProps = {
  // here define props
  navigation: any;
};

const Register: React.FC<RegisterProps> = () => {
  return (
    <ViewContainer>
      <Text style={styles.title}>Register</Text>
      <RegisterForm user={MOCK_USER_2} navigation={"ThesisOverview"} />
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
