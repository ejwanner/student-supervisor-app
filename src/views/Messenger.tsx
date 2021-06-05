import React from "react";
import ViewContainer from "../components/ViewContainer";
import { StyleSheet, View } from "react-native";
import { IconButton, Text, TextInput } from "react-native-paper";
import { useSelector } from "react-redux";
import {
  getActiveConversation,
  getMessagesByConversation,
} from "../shared/data/chat/selectors";
import { AppState, Conversation, Message, UserInfo } from "../shared/types";
import { sendMessage } from "../shared/websocket";
import { getUserInfo } from "../shared/data/auth/selectors";

type MessengerProps = {};

const Messenger: React.FC<MessengerProps> = () => {
  const activeConversation = useSelector<AppState, Conversation | null>(
    getActiveConversation
  );

  const user = useSelector<AppState, UserInfo>(getUserInfo);

  const conversationMessages = useSelector<AppState, Message[]>(
    getMessagesByConversation
  );

  const send = () => {
    if (activeConversation && message.length > 0) {
      sendMessage({
        conversation: activeConversation,
        message,
        createdBy: user,
      });
      setMessage("");
    }
  };
  const [message, setMessage] = React.useState("");
  return (
    <ViewContainer>
      <View style={styles.wrapper}>
        <View>
          {conversationMessages.map((mes, index) => (
            <View
              key={`message-${activeConversation?._id}-${mes._id}`}
              style={
                mes.createdBy._id === user._id ? styles.sent : styles.received
              }
            >
              <Text
                style={{
                  color: mes.createdBy._id === user._id ? "#fff" : "#000",
                }}
              >
                {mes.message}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.messageBar}>
          <TextInput
            value={message}
            onChangeText={setMessage}
            mode="outlined"
            style={{ width: "80%" }}
          />
          <IconButton icon="send" size={30} onPress={send} />
        </View>
      </View>
    </ViewContainer>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  messageBar: {
    width: "100%",
    position: "absolute",
    bottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  received: {
    alignSelf: "flex-start",
    marginTop: 6,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 20,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#6200ee",
  },
  sent: {
    alignSelf: "flex-end",
    marginTop: 6,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 20,
    backgroundColor: "#6200ee",
  },
});
export default Messenger;
