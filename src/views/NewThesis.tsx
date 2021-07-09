import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ThesisForm from "../components/forms/ThesisForm";
import ViewContainer from "../components/ViewContainer";
import { getUserInfo } from "../shared/data/auth/selectors";
import { createNewThesis } from "../shared/data/thesis";
import { AppState, Thesis, ThesisStatus, UserInfo } from "../shared/types";

type NewThesisProps = {
  navigation: any;
};

const NewThesis: React.FC<NewThesisProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector<AppState, UserInfo | null>(getUserInfo);
  const newThesis: Thesis = {
    status: ThesisStatus.Draft,
    title: "",
    description: "",
    createdBy: user?._id,
    category: "",
  };

  const createThesis = (values: Thesis) => {
    dispatch(createNewThesis(values));
  };

  return (
    <ViewContainer>
      <ThesisForm
        navigation={navigation}
        thesisValues={newThesis}
        submit={createThesis}
      />
    </ViewContainer>
  );
};

export default NewThesis;
