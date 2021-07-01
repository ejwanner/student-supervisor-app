import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ViewContainer from "../components/ViewContainer";
import ThesisForm from "../components/forms/ThesisForm";
import {
  getSelectedThesis,
  hasCreatedSelectedThesis,
  isSupervisorOfThesis,
} from "../shared/data/thesis/selectors";
import { AppState, Thesis, UserInfo } from "../shared/types";
import { getUserById, getUserInfo } from "../shared/data/auth/selectors";
import { ToggleButton } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { updateThesis } from "../shared/data/thesis";

enum Mode {
  Edit = "Edit",
  Readonly = "Readonly",
}

const ThesisDetail = () => {
  const dispatch = useDispatch();
  const selectedThesis =
    useSelector<AppState, Thesis | null>(getSelectedThesis);
  const user = useSelector<AppState, UserInfo>(getUserInfo);
  const supervisor = useSelector<AppState, UserInfo | undefined>((state) =>
    getUserById(state, selectedThesis?.supervisorId)
  );
  const isSupervisorOfSelectedThesis =
    useSelector<AppState, boolean>(isSupervisorOfThesis);
  const hasCreatedThesis = useSelector<AppState, boolean>(
    hasCreatedSelectedThesis
  );

  const [mode, setMode] = React.useState<Mode>(Mode.Readonly);

  const hasWritePermission = isSupervisorOfSelectedThesis || hasCreatedThesis;

  const update = (values: Thesis) => {
    dispatch(
      updateThesis({
        ...values,
        supervisorId: "",
        secondSupervisorId: "",
      })
    );
  };

  return (
    <ViewContainer>
      {hasWritePermission && (
        <View style={styles.modeHeader}>
          <ToggleButton.Row
            value={mode}
            onValueChange={(value) => setMode(value as Mode)}
          >
            <ToggleButton icon="lock" value={Mode.Readonly} size={16} />
            <ToggleButton icon="pencil" value={Mode.Edit} size={16} />
          </ToggleButton.Row>
        </View>
      )}
      {selectedThesis && (
        <ThesisForm
          thesisValues={selectedThesis}
          disabled={mode === Mode.Readonly}
          supervisor={supervisor}
          isSupervisor={user.supervisor}
          submit={update}
        />
      )}
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  modeHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },
});

export default ThesisDetail;
