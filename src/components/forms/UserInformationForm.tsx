import React from "react";
import { connect } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { AppDispatch, AppState, UserInfo } from "../../shared/types";
import FormField from "../FormField";
import { getUserInfo } from "../../shared/data/auth/selectors";
import { setIsUserSupervisor, updateUser } from "../../shared/data/auth";

type StateProps = {
  userInfo: UserInfo;
};

type DispatchProps = {
  update: (user: UserInfo) => void;
};

type UserInformationFormProps = StateProps & DispatchProps;

const UserInformationForm: React.FC<UserInformationFormProps> = ({
  userInfo,
  update,
}) => {
  const { control, handleSubmit } = useForm<UserInfo>({
    defaultValues: {
      ...userInfo,
    },
  });
  return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormField
            onBlur={onBlur}
            onChange={(value) => onChange(value)}
            value={value}
            label="Username"
          />
        )}
        name="name"
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormField
            onBlur={onBlur}
            onChange={(value) => onChange(value)}
            value={value}
            label="E-Mail"
          />
        )}
        name="email"
      />

      <Button mode="outlined" onPress={handleSubmit(update)}>
        Update user information
      </Button>
    </View>
  );
};

const mapStateToProps = (state: AppState): StateProps => ({
  userInfo: getUserInfo(state),
});

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  update: (user) => dispatch(updateUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInformationForm);
