import React from "react";
import ViewContainer from "../components/ViewContainer";
import { useDispatch, useSelector } from "react-redux";
import { setFilterStatus } from "../shared/data/status";
import { setFilterCategory } from "../shared/data/category";
import { AppState, Status, Category } from "../shared/types";
import { getAllStatus, getFilterStatus } from "../shared/data/status/selectors";
import {
  getAllCategories,
  getFilterCategory,
} from "../shared/data/category/selectors";
import { Button, Divider, List, RadioButton, Text } from "react-native-paper";
import { ScrollView } from "react-native";
import { setThesisFilterObject } from "../shared/data/thesis";

type FilterProps = {
  navigation: any;
};

const Filter: React.FC<FilterProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const allStatus = useSelector<AppState, Status[]>(getAllStatus);
  const filterStatus = useSelector<AppState, Status | null>(getFilterStatus);
  const allCategories = useSelector<AppState, Category[]>(getAllCategories);
  const filterCategory =
    useSelector<AppState, Category | null>(getFilterCategory);

  const selectStatusFilter = (status: Status | null) => {
    dispatch(setFilterStatus(status));
  };

  const selectCategoryFilter = (category: Category | null) => {
    dispatch(setFilterCategory(category));
  };

  const applyFilters = () => {
    dispatch(setThesisFilterObject())
    return navigation.goBack(null)
  }

  return (
    <ViewContainer>
      <ScrollView>
        <List.Section>
          <Text>Status</Text>
        </List.Section>
        <List.Item
          title="All"
          onPress={() => selectStatusFilter(null)}
          right={(props) => (
            <RadioButton
              value="first"
              status={filterStatus === null ? "checked" : "unchecked"}
              onPress={() => selectStatusFilter(null)}
            />
          )}
        />
        <Divider />
        {allStatus.map((status, index) => (
          <>
            <List.Item
              key={`status-${status._id}`}
              title={status.name}
              onPress={() => selectStatusFilter(status)}
              right={(props) => (
                <RadioButton
                  value="first"
                  status={
                    filterStatus && filterStatus._id === status._id
                      ? "checked"
                      : "unchecked"
                  }
                  onPress={() => selectStatusFilter(status)}
                />
              )}
            />
            <Divider key={`divider-${status._id}`} />
          </>
        ))}
        <List.Section style={{ marginTop: 18 }}>
          <Text>Category</Text>
        </List.Section>
        <List.Item
          title="All"
          onPress={() => selectCategoryFilter(null)}
          right={(props) => (
            <RadioButton
              value="first"
              status={filterCategory === null ? "checked" : "unchecked"}
              onPress={() => selectCategoryFilter(null)}
            />
          )}
        />
        <Divider />
        {allCategories.map((category, index) => (
          <>
            <List.Item
              key={`category-${category._id}`}
              title={category.name}
              onPress={() => selectCategoryFilter(category)}
              right={(props) => (
                <RadioButton
                  value="first"
                  status={
                    filterCategory && filterCategory._id === category._id
                      ? "checked"
                      : "unchecked"
                  }
                  onPress={() => selectCategoryFilter(category)}
                />
              )}
            />
            <Divider key={`divider-${category._id}`} />
          </>
        ))}
        <Button
          mode="contained"
          style={{ marginTop: 24, marginBottom: 24 }}
          onPress={applyFilters}
        >
          Apply Filters
        </Button>
      </ScrollView>
    </ViewContainer>
  );
};

export default Filter;
