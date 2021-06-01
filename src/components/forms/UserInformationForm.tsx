import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { AppState, UserInfo } from "../../shared/types";
import FormField from "../FormField";
import { getUserInfo } from "../../shared/data/auth/selectors";
import { logoutUser, updateUser } from "../../shared/data/auth";

const UserInformationForm: React.FC = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector<AppState, UserInfo>(getUserInfo);

  const { control, handleSubmit } = useForm<UserInfo>({
    defaultValues: {
      ...userInfo,
    },
  });

  const update = (user: UserInfo) => {
    dispatch(updateUser(user));
  };

  const logout = () => {
    dispatch(logoutUser());
  };

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
            disabled
          />
        )}
        name="email"
      />

      <Button mode="contained" onPress={handleSubmit(update)}>
        Update user information
      </Button>
      <Button mode="outlined" onPress={logout} style={{ marginTop: 10 }}>
        Logout
      </Button>
    </View>
  );
};

export default UserInformationForm;
