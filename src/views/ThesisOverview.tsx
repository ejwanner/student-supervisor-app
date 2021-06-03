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

const ThesisOverview: React.FC<ThesisOverviewProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const allThesis = useSelector<AppState, Thesis[]>(getAllThesis);
  const [thesisStatus] = React.useState<IThesisStatus[]>(THESIS_STATI);
  const [thesisCategories] = React.useState<Category[]>(ALL_CATEGORIES);

  React.useEffect(() => {
    // replace with real action when there
    dispatch(setAllThesis(ALL_THESIS));
  }, []);

  return (
    <ViewContainer>
      <View style={styles.filterRow}>
        <FilterButton data={thesisStatus} text="Status" />
        <FilterButton data={thesisCategories} text="Categories" />
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
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  filterBtn: {
    width: "25%",
  },
});

export default ThesisOverview;
