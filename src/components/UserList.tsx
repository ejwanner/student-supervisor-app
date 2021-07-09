import React from "react";
import ViewContainer from "./ViewContainer";
import { useSelector } from "react-redux";
import { getAllUsers } from "../shared/data/auth/selectors";
import { UserInfo, AppState } from "../shared/types";
import { Button, DataTable } from "react-native-paper";

type UserListProps = {
  navigation: any;
  action: (user: UserInfo) => void;
  onlySupervisors?: boolean;
};

const UserList: React.FC<UserListProps> = ({ action, onlySupervisors }) => {
  const allUsers = onlySupervisors
    ? useSelector<AppState, UserInfo[]>(getAllUsers).filter(
        (u) => u.supervisor === true
      )
    : useSelector<AppState, UserInfo[]>(getAllUsers).filter(
        (u) => u.supervisor === false
      );

  return (
    <ViewContainer>
      <DataTable>
        {allUsers &&
          allUsers.map((user, index) => (
            <DataTable.Row key={`${user.email}-${index}`}>
              <DataTable.Cell>{user.email}</DataTable.Cell>
              <DataTable.Cell numeric>
                <Button mode="outlined" compact onPress={() => action(user)}>
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
