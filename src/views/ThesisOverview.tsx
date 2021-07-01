import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import ThesisList from "../components/ThesisList";
import ViewContainer from "../components/ViewContainer";
import { getAllThesis } from "../shared/data/thesis/selectors";
import { Thesis, AppState } from "../shared/types";
import { Button } from "react-native-paper";

const ThesisOverview: React.FC<ThesisOverviewProps> = ({ navigation }) => {
  const allThesis = useSelector<AppState, Thesis[]>(getAllThesis);

  const goToFilter = () => navigation.navigate("Filter");

  return (
    <ViewContainer>
      <View style={styles.filterRow}>
        <Button icon="filter" onPress={goToFilter}>
          Filter
        </Button>
      </View>
      <ScrollView>
        <ThesisList thesisItems={allThesis} navigation={navigation} />
      </ScrollView>
    </ViewContainer>
  );
};

type OwnProps = {
  navigation: any;
};

type ThesisOverviewProps = OwnProps;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 18,
  },
  filterRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 18,
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
  },
  filterBtn: {
    width: "25%",
  },
});

export default ThesisOverview;
