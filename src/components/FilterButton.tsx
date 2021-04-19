import React from "react";
import { View, StyleSheet } from "react-native";
import { Menu, Button } from "react-native-paper";

type FilterSchema = { id: number; name: string };

type FilterButtonProps = {
  data: Array<FilterSchema>;
  text: string;
};

const FilterButton: React.FC<FilterButtonProps> = ({ data, text }) => {
  const [isFilterOpen, setIsFilterOpen] = React.useState<boolean>(false);
  return (
    <View>
      <Menu
        visible={isFilterOpen}
        onDismiss={() => setIsFilterOpen(false)}
        anchor={
          <Button
            icon="filter"
            mode="outlined"
            onPress={() => setIsFilterOpen(true)}
            style={styles.filterBtn}
          >
            {text}
          </Button>
        }
      >
        {data &&
          data.map((item: FilterSchema) => (
            <Menu.Item key={`filter-status-${item.id}`} title={item.name} />
          ))}
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  filterBtn: {
    width: "auto",
  },
});

export default FilterButton;
