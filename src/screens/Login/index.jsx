import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { Formik } from 'formik';


function LoginScreen({ navigation }) {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <Text>Login Screen</Text>

            <Formik initialValues={{ email: '' }} onSubmit={values => console.log(values)}>
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View style={{ padding: 70 }}>
                        <TextInput
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            style={{ borderWidth: 1, borderColor: "#333", marginBottom: 10 }}
                        />
                        <TextInput
                            onChangeText={handleChange('passaword')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            style={{ borderWidth: 1, borderColor: "#333", marginBottom: 10 }}
                        />
                        <Button onPress={handleSubmit} title="Submit" />
                    </View>
                )}
            </Formik>

            <TouchableOpacity>
                <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text>Cadastrar-se</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
                <Text>Esqueci a senha</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LoginScreen;