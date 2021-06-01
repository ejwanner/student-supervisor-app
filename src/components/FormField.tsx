import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

type FormFieldProps = {
  label: string;
  value: string;
  onBlur: () => void;
  onChange: (text: string) => void;
  disabled?: boolean;
  secureTextEntry?: boolean;
};

const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onBlur,
  onChange,
  disabled,
  secureTextEntry,
}) => {
  return (
    <TextInput
      style={styles.root}
      mode="outlined"
      label={label}
      onBlur={onBlur}
      onChangeText={onChange}
      value={value}
      autoCapitalize="none"
      disabled={disabled}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  root: {
    marginBottom: 12,
  },
});

export default FormField;
