import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import UserInformationForm from "../components/forms/UserInformationForm";
import ViewContainer from "../components/ViewContainer";
import { IUser } from "../shared/types";
import { MOCK_USER } from "../shared/constants";

const Settings: React.FC = () => {
  const submitUserInformation = (data: IUser) => {
    console.log(data);
  };
  return (
    <ViewContainer title="Settings">
      <Text style={styles.sectionTitle}>User information</Text>
      <UserInformationForm user={MOCK_USER} onSubmit={submitUserInformation} />
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    marginBottom: 18,
  },
});

export default Settings;
