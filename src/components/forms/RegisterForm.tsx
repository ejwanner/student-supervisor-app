import React from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Button, Checkbox } from "react-native-paper";
import { UserRegister } from "../../shared/types";
import FormField from "../FormField";

type RegisterFormProps = {
  onSubmit: (data: UserRegister) => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm<UserRegister>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      supervisor: false,
    } as UserRegister,
  });
  const [checked, setChecked] = React.useState(false);

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
      <View style={styles.checkButtonBox}>
        <Checkbox.Item
          label="Supervisor: "
          labelStyle={styles.checkButtonLabel}
          style={styles.checkButton}
          color="green"
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
        />
      </View>
      <Button
        style={styles.button}
        mode="contained"
        onPress={handleSubmit(onSubmit)}
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
  checkButtonBox: {
    borderWidth: 2,
    borderColor: "#C0C0C0",
  },
  checkButton: {
    justifyContent: "flex-start",
    borderColor: "#C0C0C0",
  },
  checkButtonLabel: {
    fontSize: 18,
  },
  radioButtonView: {
    width: "50%",
  },
});

export default RegisterForm;
