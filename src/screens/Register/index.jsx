import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik';

import UserModel from '../../models/user-model';

function RegisterScreen({ navigation }) {

    function register(values) {
        console.log(values)
        UserModel.save(values);
    }

    console.log(UserModel.getById("19ab2fc7-2f7b-4c68-85fc-d45647354bd2"));

    return (
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch', padding: 20 }}>
            <Formik initialValues={{ email: '' }} onSubmit={register}>
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <Text>Nome:</Text>
                        <TextInput
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            style={{ borderWidth: 1, borderColor: "#333", marginBottom: 10 }}
                            autoCompleteType="name"
                        />

                        <Text>Email:</Text>
                        <TextInput
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            style={{ borderWidth: 1, borderColor: "#333", marginBottom: 10 }}
                            autoCompleteType="email"
                        />

                        <Text>Senha:</Text>
                        <TextInput
                            secureTextEntry={true}
                            onChangeText={handleChange('passaword')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            style={{ borderWidth: 1, borderColor: "#333", marginBottom: 10 }}
                            autoCompleteType="password"
                        />
                        <Button onPress={handleSubmit} title="Submit" />
                    </View>
                )}
            </Formik>
        </View>
    );
}

export default RegisterScreen;