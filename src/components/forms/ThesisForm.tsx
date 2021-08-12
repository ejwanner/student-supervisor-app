import React from "react";
import { Button, Chip, IconButton, Text } from "react-native-paper";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { AddSupervisorType, Thesis, UserInfo } from "../../shared/types";
import FormField from "../FormField";

type ThesisFormProps = {
  navigation: any;
  thesisValues: Thesis;
  disabled?: boolean;
  supervisor?: UserInfo;
  secondSupervisor?: UserInfo;
  student?: UserInfo;
  isSupervisor?: boolean;
  submit: (values: Thesis) => void;
};

const ThesisForm: React.FC<ThesisFormProps> = ({
  navigation,
  thesisValues,
  disabled,
  supervisor,
  secondSupervisor,
  student,
  isSupervisor,
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
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>Supervised by: </Text>
          {supervisor ? (
            <Text>{supervisor.name}</Text>
          ) : (
            <IconButton
              icon="account-plus"
              disabled={disabled || !isSupervisor}
              onPress={() =>
                navigation.navigate("Add Supervisor", {
                  type: AddSupervisorType.Supervisor,
                })
              }
            />
          )}
        </View>
        <Controller
          control={control}
          render={({ field: { value } }) => <Chip>{value}</Chip>}
          name="status"
        />
      </View>
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
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>Controlled by: </Text>
          {secondSupervisor ? (
            <Text>{secondSupervisor.name}</Text>
          ) : (
            <IconButton
              icon="account-plus"
              disabled={disabled || !isSupervisor}
              onPress={() =>
                navigation.navigate("Add Supervisor", {
                  type: AddSupervisorType.SecondSupervisor,
                })
              }
            />
          )}
        </View>
      </View>
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
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>Student: </Text>
          {student ? (
            <Text>{student.name}</Text>
          ) : (
            <IconButton
              icon="account-plus"
              disabled={disabled || !isSupervisor}
              onPress={() =>
                navigation.navigate("Add Supervisor", {
                  type: AddSupervisorType.Student,
                })
              }
            />
          )}
        </View>
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
