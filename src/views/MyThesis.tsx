import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";
import FilterWrapper from "../components/FilterWrapper";
import ThesisList from "../components/ThesisList";
import ViewContainer from "../components/ViewContainer";
import { getMyThesis, getThesisFilter } from "../shared/data/thesis/selectors";
import { filteredThesis } from "../shared/helpers";
import { AppState, Thesis, ThesisFilter } from "../shared/types";

type MyThesisProps = {
  navigation: any;
};

const MyThesis: React.FC<MyThesisProps> = ({ navigation }) => {
  const myThesis = useSelector<AppState, Thesis[]>(getMyThesis);
  const thesisFilter = useSelector<AppState, ThesisFilter | null>(getThesisFilter);

  const openNewThesisForm = () => {
    navigation.navigate("New Thesis");
  };
  return (
    <ViewContainer>
      <FilterWrapper navigation={navigation} />
      <View style={styles.header}>
        <Button mode="outlined" onPress={openNewThesisForm}>
          New Thesis
        </Button>
      </View>
      <ThesisList thesisItems={filteredThesis(myThesis, thesisFilter)} navigation={navigation} />
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 18,
    marginBottom: 18,
  },
});

export default MyThesis;
