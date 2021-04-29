import React from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { UserSignIn } from "../../shared/types";
import FormField from "../FormField";

type SignInFormProps = {
  user: UserSignIn;
  onSubmit: (data: UserSignIn) => void;
  navigateToRegister: () => void;
};

const SignInForm: React.FC<SignInFormProps> = ({
  navigateToRegister,
  user,
  onSubmit,
}) => {
  const { control, handleSubmit } = useForm({ defaultValues: user });
  return (
    <View style={styles.inputField}>
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
            label="Password"
          />
        )}
        name="password"
      />
      <Button
        style={styles.button}
        mode="contained"
        onPress={handleSubmit(onSubmit)}
      >
        Sign In
      </Button>
      <Button
        style={styles.button}
        mode="outlined"
        onPress={() => navigateToRegister()}
      >
        Register
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 18,
  },
  inputField: {
    justifyContent: "center",
    alignContent: "center",
    marginTop: "10%",
  },
});

export default SignInForm;
