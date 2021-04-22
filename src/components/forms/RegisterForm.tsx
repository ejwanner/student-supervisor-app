import React from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Button, RadioButton, Checkbox, Text } from "react-native-paper";
import { UserRegister } from "../../shared/types";
import FormField from "../FormField";

type RegisterFormProps = {
  navigation: any;
  user: UserRegister;
//   onSubmit: (data: UserSignIn) => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ navigation, user }) => {
    const { control, handleSubmit } = useForm({ defaultValues: user });
    const [checked, setChecked] = React.useState(false);
    // const [value, setValue] = React.useState('student');
        return (
            <View style={styles.inputField}>
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
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <FormField
                        onBlur={onBlur}
                        onChange={(value) => onChange(value)}
                        value={value}
                        label="Confirm Password"
                    />
                    )}
                    name="confirm_password"
                />
                <View style={styles.checkButtonBox}>
                    <Checkbox.Item
                        label="Supervisor: "
                        labelStyle={styles.checkButtonLabel}
                        style={styles.checkButton}
                        color='green'
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {setChecked(!checked);}}
                    />
                </View>
                {/* <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    <View style={styles.radioButtonView}>
                        <Text>Student</Text>
                        <RadioButton value="student" />
                        <Text>Supervisor</Text>
                        <RadioButton value="supervisor" />
                    </View>
                </RadioButton.Group> */}

                {/* <Button mode="contained" onPress={navigation.navigate('ThesisOverview')}> */}
                <Button style={styles.button} mode="contained" onPress={() => console.log('Register Button Clicked')}>
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
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: '10%'
    },
    checkButtonBox: {
        borderWidth: 2,
        borderColor: '#C0C0C0'
    },
    checkButton: {
        justifyContent: 'flex-start',
        borderColor: '#C0C0C0',

    },
    checkButtonLabel: {
        fontSize: 18
    },
    radioButtonView: {
        width: '50%'
    }
  });

export default RegisterForm;