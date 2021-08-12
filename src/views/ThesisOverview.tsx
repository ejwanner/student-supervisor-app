import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import ThesisList from "../components/ThesisList";
import ViewContainer from "../components/ViewContainer";
import { getAllThesis, getThesisFilter } from "../shared/data/thesis/selectors";
import { Thesis, AppState, ThesisFilter } from "../shared/types";
import { filteredThesis } from "../shared/helpers";
import FilterWrapper from "../components/FilterWrapper";

const ThesisOverview: React.FC<ThesisOverviewProps> = ({ navigation }) => {
  const allThesis = useSelector<AppState, Thesis[]>(getAllThesis);
  const thesisFilter = useSelector<AppState, ThesisFilter | null>(getThesisFilter);

  return (
    <ViewContainer>
      <FilterWrapper navigation={navigation} />
      <ScrollView>
        <ThesisList thesisItems={filteredThesis(allThesis, thesisFilter)} navigation={navigation} />
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

  filterBtn: {
    width: "25%",
  },
});

export default ThesisOverview;
