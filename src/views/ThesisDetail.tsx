import React from "react";
import { Text } from "react-native-paper";
import { useSelector } from "react-redux";
import ViewContainer from "../components/ViewContainer";
import { getSelectedThesis } from "../shared/data/thesis/selectors";
import { AppState, Thesis } from "../shared/types";

const ThesisDetail = () => {
  const selectedThesis =
    useSelector<AppState, Thesis | null>(getSelectedThesis);
  return (
    <ViewContainer>
      {selectedThesis && <Text>{selectedThesis.title}</Text>}
    </ViewContainer>
  );
};

export default ThesisDetail;
