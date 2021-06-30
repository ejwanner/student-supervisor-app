import React from "react";
import { Button, Chip, Text } from "react-native-paper";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { Thesis, UserInfo } from "../../shared/types";
import FormField from "../FormField";

type ThesisFormProps = {
  thesisValues: Thesis;
  disabled?: boolean;
  supervisor?: UserInfo;
  submit: (values: Thesis) => void;
};

const ThesisForm: React.FC<ThesisFormProps> = ({
  thesisValues,
  disabled,
  supervisor,
  submit,
}) => {
  const { control, handleSubmit } = useForm<Thesis>({
    defaultValues: {
      ...thesisValues,
    },
  });

  return (
    <View style={{ display: "flex", flexDirection: "column" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 28,
          marginTop: 10,
        }}
      >
        <Text>Supervised by: {supervisor && supervisor.name}</Text>
        <Controller
          control={control}
          render={({ field: { value } }) => <Chip>{value}</Chip>}
          name="status"
        />
      </View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormField
            onBlur={onBlur}
            onChange={(value) => onChange(value)}
            value={value}
            label="Title"
            disabled={disabled}
          />
        )}
        name="title"
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormField
            onBlur={onBlur}
            onChange={(value) => onChange(value)}
            value={value}
            label="Description"
            multiline
            disabled={disabled}
          />
        )}
        name="description"
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormField
            onBlur={onBlur}
            onChange={(value) => onChange(value)}
            value={value}
            label="Category"
            disabled={disabled}
          />
        )}
        name="category"
      />
      {!disabled && (
        <Button mode="contained" onPress={handleSubmit(submit)}>
          Save
        </Button>
      )}
    </View>
  );
};

export default ThesisForm;
