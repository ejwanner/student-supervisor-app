import React from "react";
import UserList from "../components/UserList";
import ViewContainer from "../components/ViewContainer";
import { UserInfo } from "../shared/types";

type AddSupervisorProps = {
  navigation: any;
};

const AddSupervisor: React.FC<AddSupervisorProps> = ({ navigation }) => {
  const addSupervisor = (user: UserInfo) => {
    console.log("Add supervisor", user);
  };
  return (
    <ViewContainer>
      <UserList navigation={navigation} action={addSupervisor} />
    </ViewContainer>
  );
};

export default AddSupervisor;
