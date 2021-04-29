import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { IUser } from "../../shared/types";
import FormField from "../FormField";

type UserInformationFormProps = {
  user: IUser;
  onSubmit: (data: IUser) => void;
};

const UserInformationForm: React.FC<UserInformationFormProps> = ({
  onSubmit,
  user,
}) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: user.username,
      number: user.number,
      category: user.category.name,
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
        name="username"
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormField
            onBlur={onBlur}
            onChange={(value) => onChange(value)}
            value={value}
            label="Number"
          />
        )}
        name="number"
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormField
            onBlur={onBlur}
            onChange={(value) => onChange(value)}
            value={value}
            label="Category"
          />
        )}
        name="category"
      />
      <Button mode="outlined" onPress={handleSubmit(onSubmit)}>
        Update user information
      </Button>
    </View>
  );
};

export default UserInformationForm;
