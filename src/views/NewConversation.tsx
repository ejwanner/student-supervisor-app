import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from "../components/UserList";
import ViewContainer from "../components/ViewContainer";
import { getUserInfo } from "../shared/data/auth/selectors";
import { createConversation } from "../shared/data/chat";
import { AppState, Conversation, UserInfo } from "../shared/types";

type NewConversationProps = {
  navigation: any;
};

const NewConversation: React.FC<NewConversationProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const me = useSelector<AppState, UserInfo>(getUserInfo);

  const create = (participant: UserInfo) => {
    if (me && participant) {
      const newConversation: Conversation = { owner: me, participant };
      dispatch(createConversation(newConversation));
      navigation.navigate("Chat");
    }
  };
  return (
    <ViewContainer>
      <UserList navigation={navigation} action={create} />
    </ViewContainer>
  );
};

export default NewConversation;
