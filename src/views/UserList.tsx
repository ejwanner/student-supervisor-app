import React from "react";
import ViewContainer from "../components/ViewContainer";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getUserInfo } from "../shared/data/auth/selectors";
import { UserInfo, AppState, Conversation } from "../shared/types";
import { Button, DataTable } from "react-native-paper";
import { fetchAllUsers } from "../shared/data/auth";
import { createConversation } from "../shared/data/chat";

type UserListProps = {
  navigation: any;
};

const UserList: React.FC<UserListProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const me = useSelector<AppState, UserInfo>(getUserInfo);
  const allUsers = useSelector<AppState, UserInfo[]>(getAllUsers);

  React.useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  const create = (participant: UserInfo) => {
    if (me && participant) {
      const newConversation: Conversation = { owner: me, participant };
      dispatch(createConversation(newConversation));
      navigation.navigate("Chat");
    }
  };
  return (
    <ViewContainer>
      <DataTable>
        {allUsers &&
          allUsers.map((user, index) => (
            <DataTable.Row key={`${user.email}-${index}`}>
              <DataTable.Cell>{user.email}</DataTable.Cell>
              <DataTable.Cell numeric>
                <Button mode="outlined" compact onPress={() => create(user)}>
                  +
                </Button>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
      </DataTable>
    </ViewContainer>
  );
};

export default UserList;
