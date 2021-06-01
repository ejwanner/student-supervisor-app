import React from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { AppDispatch, UserLogin } from "../../shared/types";
import FormField from "../FormField";
import { login } from "../../shared/data/auth";
import { useDispatch } from "react-redux";

type OwnProps = {
  navigateToRegister: () => void;
};
type SignInFormProps = OwnProps;

const SignInForm: React.FC<SignInFormProps> = ({ navigateToRegister }) => {
  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm({
    defaultValues: { email: "", password: "" } as UserLogin,
  });

  const submitForm = (user: UserLogin) => dispatch(login(user));

  return (
    <View style={styles.inputField}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormField
            onBlur={onBlur}
            onChange={(value) => onChange(value)}
            value={value}
            label="Email"
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormField
            onBlur={onBlur}
            onChange={(value) => onChange(value)}
            value={value}
            label="Password"
            secureTextEntry
          />
        )}
        name="password"
      />
      <Button
        style={styles.button}
        mode="contained"
        onPress={handleSubmit(submitForm)}
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
