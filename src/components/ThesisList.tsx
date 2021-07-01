import React from "react";
import { View } from "react-native";
import { Divider, IconButton, List } from "react-native-paper";
import { useDispatch } from "react-redux";
import { fetchThesisById } from "../shared/data/thesis";
import { Thesis } from "../shared/types";

type ThesisListProps = {
  thesisItems: Thesis[];
  navigation: any;
};

const ThesisList: React.FC<ThesisListProps> = ({ thesisItems, navigation }) => {
  const dispatch = useDispatch();

  const navigateToThesisDetail = async (id?: string) => {
    if (id) {
      await dispatch(fetchThesisById(id));
      navigation.navigate("Thesis Detail");
    }
  };

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
                  onPress={() => navigateToThesisDetail(thesisItem._id)}
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
