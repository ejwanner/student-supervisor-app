import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from "../components/UserList";
import ViewContainer from "../components/ViewContainer";
import { updateThesis } from "../shared/data/thesis";
import { getSelectedThesis } from "../shared/data/thesis/selectors";
import { AddSupervisorType, AppState, Thesis, UserInfo } from "../shared/types";

type AddSupervisorProps = {
  navigation: any;
  route: any;
};

const AddSupervisor: React.FC<AddSupervisorProps> = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const selectedThesis =
    useSelector<AppState, Thesis | null>(getSelectedThesis);
  const addSupervisor = (user: UserInfo) => {
    if (selectedThesis) {
      if (route.params.type === AddSupervisorType.Supervisor) {
        dispatch(
          updateThesis({
            ...selectedThesis,
            supervisorId: user._id,
            secondSupervisorId: selectedThesis.secondSupervisorId || "",
            studentId: selectedThesis.studentId || "",
          })
        );
      }
      if (route.params.type === AddSupervisorType.SecondSupervisor) {
        dispatch(
          updateThesis({
            ...selectedThesis,
            secondSupervisorId: user._id,
            supervisorId: selectedThesis.supervisorId || "",
            studentId: selectedThesis.studentId || "",
          })
        );
      }
      if (route.params.type === AddSupervisorType.Student) {
        dispatch(
          updateThesis({
            ...selectedThesis,
            secondSupervisorId: selectedThesis.secondSupervisorId || "",
            supervisorId: selectedThesis.supervisorId || "",
            studentId: user._id,
          })
        );
      }
    }
  };
  return (
    <ViewContainer>
      <UserList
        navigation={navigation}
        action={addSupervisor}
        onlySupervisors={
          route.params.type === AddSupervisorType.Supervisor ||
          route.params.type === AddSupervisorType.SecondSupervisor
        }
      />
    </ViewContainer>
  );
};

export default AddSupervisor;
