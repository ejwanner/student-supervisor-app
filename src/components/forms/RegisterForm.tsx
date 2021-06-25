import React, {useState} from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { Button, Checkbox } from "react-native-paper";
import {AppState, Category, UserRegister} from "../../shared/types";
import FormField from "../FormField";
import {useSelector} from "react-redux";
import {getAllCategories} from "../../shared/data/category/selectors";

type RegisterFormProps = {
  onSubmit: (data: UserRegister) => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
    const allCategories = useSelector<AppState, Category[]>(getAllCategories);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Informatik', value: 'Informatik'},
        {label: 'Recht', value: 'Recht'},
        {label: 'Design', value: 'Design'},
        {label: 'Wirtschaftsinformatik', value: 'Wirtschaftsinformatik'}

    ]);
  const { control, handleSubmit } = useForm<UserRegister>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      supervisor: false,
        preferredCategory: "Informatik"
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
            secureTextEntry
          />
        )}
        name="password"
      />
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{
                borderWidth: 2,
                borderColor: "#C0C0C0",
                marginBottom: 12,
            }}
            textStyle={{
                fontSize: 15,
                color: "#545454"
            }}
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
    borderColor: "#C0C0C0"
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
