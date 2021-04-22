import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Menu, Text } from "react-native-paper";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import FilterButton from "../components/FilterButton";
import ThesisList from "../components/ThesisList";
import ViewContainer from "../components/ViewContainer";
import { ALL_CATEGORIES, ALL_THESIS, THESIS_STATI } from "../shared/constants";
import { setThesis } from "../shared/data/thesis";
import { getAllThesis } from "../shared/data/thesis/selectors";
import { ICategory, IThesis, IThesisStatus, AppState } from "../shared/types";

const ThesisOverview: React.FC<ThesisOverviewProps> = ({
  allThesis,
  setAllThesis,
}) => {
  const [thesisStatus] = React.useState<IThesisStatus[]>(THESIS_STATI);
  const [thesisCategories] = React.useState<ICategory[]>(ALL_CATEGORIES);

  React.useEffect(() => {
    // replace with real action when there
    setAllThesis(ALL_THESIS);
  }, []);

  return (
    <ViewContainer title="Thesis Overview">
      <View style={styles.filterRow}>
        <FilterButton data={thesisStatus} text="Status" />
        <FilterButton data={thesisCategories} text="Categories" />
      </View>
      <ThesisList thesisItems={allThesis} />
    </ViewContainer>
  );
};

type DispatchProps = {
  setAllThesis: (allThesis: IThesis[]) => void;
};

type StateProps = {
  allThesis: IThesis[];
};

type ThesisOverviewProps = StateProps & DispatchProps;

const mapDispatchToProps = (
  dispatch: (action: AnyAction) => void
): DispatchProps => ({
  setAllThesis: (allThesis: IThesis[]) => dispatch(setThesis(allThesis)),
});

const mapStateToProps = (state: AppState): StateProps => ({
  allThesis: getAllThesis(state),
});

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

export default connect(mapStateToProps, mapDispatchToProps)(ThesisOverview);
