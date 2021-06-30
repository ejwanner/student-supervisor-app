import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";
import ThesisList from "../components/ThesisList";
import ViewContainer from "../components/ViewContainer";
import { getMyThesis } from "../shared/data/thesis/selectors";
import { AppState, Thesis } from "../shared/types";

type MyThesisProps = {
  navigation: any;
};

const MyThesis: React.FC<MyThesisProps> = ({ navigation }) => {
  const myThesis = useSelector<AppState, Thesis[]>(getMyThesis);
  const openNewThesisForm = () => {
    navigation.navigate("New Thesis");
  };
  return (
    <ViewContainer>
      <View style={styles.header}>
        <Button mode="outlined" onPress={openNewThesisForm}>
          New Thesis
        </Button>
      </View>
      <ThesisList thesisItems={myThesis} navigation={navigation} />
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 18,
  },
});

export default MyThesis;
