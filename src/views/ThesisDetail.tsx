import React from "react";
import { useSelector } from "react-redux";
import ViewContainer from "../components/ViewContainer";
import ThesisForm from "../components/forms/ThesisForm";
import {
  getSelectedThesis,
  isSupervisorOfThesis,
} from "../shared/data/thesis/selectors";
import { AppState, Thesis, UserInfo } from "../shared/types";
import { getUserById, getUserInfo } from "../shared/data/auth/selectors";
import { ToggleButton } from "react-native-paper";
import { StyleSheet, View } from "react-native";

enum Mode {
  Edit = "Edit",
  Readonly = "Readonly",
}

const ThesisDetail = () => {
  const selectedThesis =
    useSelector<AppState, Thesis | null>(getSelectedThesis);
  const user = useSelector<AppState, UserInfo>(getUserInfo);
  const supervisor = useSelector<AppState, UserInfo | undefined>((state) =>
    getUserById(state, selectedThesis?.supervisorId)
  );
  const isSupervisorOfSelectedThesis =
    useSelector<AppState, boolean>(isSupervisorOfThesis);
  const [mode, setMode] = React.useState<Mode>(Mode.Readonly);

  // TODO: extend permission with creator of thesis
  const hasWritePermission = user.supervisor && isSupervisorOfSelectedThesis;

  const updateThesis = (values: Thesis) =>
    console.log("Thesis update: ", values);

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
          submit={updateThesis}
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
