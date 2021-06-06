import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import FilterButton from "../components/FilterButton";
import ThesisList from "../components/ThesisList";
import ViewContainer from "../components/ViewContainer";
import { ALL_CATEGORIES, ALL_THESIS, THESIS_STATI } from "../shared/constants";
import { setAllThesis } from "../shared/data/thesis";
import { getAllThesis } from "../shared/data/thesis/selectors";
import { Category, Thesis, IThesisStatus, AppState } from "../shared/types";
import { Button } from "react-native-paper";

const ThesisOverview: React.FC<ThesisOverviewProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const allThesis = useSelector<AppState, Thesis[]>(getAllThesis);
  const [thesisStatus] = React.useState<IThesisStatus[]>(THESIS_STATI);
  const [thesisCategories] = React.useState<Category[]>(ALL_CATEGORIES);

  React.useEffect(() => {
    // replace with real action when there
    dispatch(setAllThesis(ALL_THESIS));
  }, []);

  const goToFilter = () => navigation.navigate("Filter");

  return (
    <ViewContainer>
      <View style={styles.filterRow}>
        <Button icon="filter" onPress={goToFilter}>
          Filter
        </Button>
      </View>
      <ThesisList thesisItems={allThesis} navigation={navigation} />
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
    marginBottom: 18,
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
  },
  filterBtn: {
    width: "25%",
  },
});

export default ThesisOverview;
