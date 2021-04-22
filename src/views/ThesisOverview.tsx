import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Menu, Text } from "react-native-paper";
import FilterButton from "../components/FilterButton";
import ThesisList from "../components/ThesisList";
import ViewContainer from "../components/ViewContainer";
import { ALL_CATEGORIES, ALL_THESIS, THESIS_STATI } from "../shared/constants";
import { ICategory, IThesisStatus } from "../shared/types";

const ThesisOverview = () => {
  const [thesisStatus] = React.useState<IThesisStatus[]>(THESIS_STATI);
  const [thesisCategories] = React.useState<ICategory[]>(ALL_CATEGORIES);
  const [isFilterOpen, setIsFilterOpen] = React.useState<boolean>(false);
  return (
    <ViewContainer title="Thesis Overview">
      <View style={styles.filterRow}>
        <FilterButton data={thesisStatus} text="Status" />
        <FilterButton data={thesisCategories} text="Categories" />
      </View>
      <ThesisList thesisItems={ALL_THESIS} />
    </ViewContainer>
  );
};

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
