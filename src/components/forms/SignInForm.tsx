import React from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { UserSignIn } from "../../shared/types";
import FormField from "../FormField";

type SignInFormProps = {
  navigation: string;
  user: UserSignIn;
//   onSubmit: (data: UserSignIn) => void;
};

const SignInForm: React.FC<SignInFormProps> = ({ navigation, user }) => {
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
                {/* <Button mode="contained" onPress={navigation.navigate('ThesisOverview')}> */}
                <Button style={styles.button} mode="contained" onPress={() => console.log('Sign In Button Clicked')}>
                    Sign In
                </Button>
                <Button style={styles.button} mode="outlined" onPress={() => console.log('Sign Up Button Clicked')}>
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
  });

export default SignInForm;