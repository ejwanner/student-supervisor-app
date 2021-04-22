import React from "react";
import { View } from "react-native";
import { Divider, IconButton, List } from "react-native-paper";
import { IThesis } from "../shared/types";

type ThesisListProps = {
  thesisItems: IThesis[];
};

const ThesisList: React.FC<ThesisListProps> = ({ thesisItems }) => {
  return (
    <>
      {thesisItems &&
        thesisItems.map((thesisItem: IThesis, index: number) => (
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
                  onPress={() => console.log("navigate to details")}
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
