import React from "react";
import { View } from "react-native";
import { Divider, IconButton, List } from "react-native-paper";
import { Thesis } from "../shared/types";

type ThesisListProps = {
  thesisItems: Thesis[];
  navigation: any;
};

const ThesisList: React.FC<ThesisListProps> = ({ thesisItems, navigation }) => {
  return (
    <>
      {thesisItems &&
        thesisItems.map((thesisItem: Thesis, index: number) => (
          <View key={`thesis-list-item-${index}`}>
            <List.Item
              title={thesisItem.title}
              description={thesisItem.description}
              descriptionNumberOfLines={1}
              descriptionEllipsizeMode="tail"
              right={(props) => (
                <IconButton
                  key={`thesis-list-btn-${index}`}
                  icon="book-information-variant"
                  size={20}
                  onPress={() => navigation.navigate("Thesis Detail")}
                />
              )}
            />
            <Divider />
          </View>
        ))}
    </>
  );
};

export default ThesisList;
