import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

type FormFieldProps = {
  label: string;
  value: string;
  onBlur: () => void;
  onChange: (text: string) => void;
};

const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onBlur,
  onChange,
}) => {
  return (
    <TextInput
      style={styles.root}
      mode="outlined"
      label={label}
      onBlur={onBlur}
      onChangeText={onChange}
    />
  );
};

const styles = StyleSheet.create({
  root: {
    marginBottom: 12,
  },
});

export default FormField;
