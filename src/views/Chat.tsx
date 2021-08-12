import React from "react";
import ViewContainer from "../components/ViewContainer";
import {
  Button,
  Divider,
  IconButton,
  List,
  Text,
  Title,
} from "react-native-paper";
import {
  disconnectSocket,
  sendMessage,
  startSocketIO,
} from "../shared/websocket";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../shared/data/auth/selectors";
import { AppState, Conversation, UserInfo } from "../shared/types";
import {
  fetchAllConversations,
  fetchMessages,
  setActiveConversation,
} from "../shared/data/chat";
import { StyleSheet, View } from "react-native";
import { getMyConversations } from "../shared/data/chat/selectors";

export type ChatProps = {
  navigation: any;
};

const Chat: React.FC<ChatProps> = ({ navigation }) => {
  const user = useSelector<AppState, UserInfo>(getUserInfo);
  const myConversations =
    useSelector<AppState, Conversation[]>(getMyConversations);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAllConversations());
    dispatch(fetchMessages());
    dispatch(startSocketIO());
    return () => disconnectSocket();
  }, [dispatch]);

  const openConversation = (conv: Conversation) => {
    dispatch(setActiveConversation(conv));
    navigation.navigate("Messenger");
  };

  return (
    <ViewContainer>
      <View style={styles.header}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("New Conversation")}
        >
          Create Conversation
        </Button>
      </View>
      {myConversations &&
        myConversations.map((conv, index) => (
          <View key={`chat-list-item-${index}`}>
            <List.Item
              title={
                conv.participant._id === user._id
                  ? conv.owner.name
                  : conv.participant.name
              }
              right={(props) => (
                <IconButton
                  key={`chat-list-btn-${index}`}
                  icon="message"
                  size={20}
                  onPress={() => openConversation(conv)}
                />
              )}
            />
            <Divider />
          </View>
        ))}
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 15,
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: "35%",
  },
});

export default Chat;
