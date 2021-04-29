import React from "react";
import { NavigationContainer as NavContainer } from "@react-navigation/native";
import { BottomTabs } from "./BottomNavigator";
import { AuthStackNavigator } from "./StackNavigator";
import { AppState, UserInfo } from "../../shared/types";
import { getToken, getUserInfo } from "../../shared/data/auth/selectors";
import { connect } from "react-redux";

interface StateProps {
  token: string | null;
  userInfo: UserInfo | null;
}

interface OwnProps {
  theme: any;
}

type NavigationContainerProps = OwnProps & StateProps;

const NavigationContainer: React.FC<NavigationContainerProps> = ({
  theme,
  token,
}) => {
  return (
    <NavContainer theme={theme}>
      {!token ? <AuthStackNavigator /> : <BottomTabs />}
    </NavContainer>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  token: getToken(state),
  userInfo: getUserInfo(state),
});

export default connect(mapStateToProps, {})(NavigationContainer);
