import React from 'react';
import { Formik } from 'formik';
import { Icon, Content, Form, Item, Input, Button, Text, View, Label } from "native-base";

import UserModel from '../../models/user-model';

import AlertElement from '../../elements/alert-element';

function RegisterScreen({ navigation }) {
    const initialValues = {
        name: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        passwordCheck: '',
    }

    function handleOnSubmit(values) {
        let inputIsValid = true;
        Object.keys(initialValues).forEach(key => {
            if (initialValues[key] === values[key]) {
                inputIsValid = false;
            }
        });
        if (values.password !== values.passwordCheck) {
            inputIsValid = false;
        }
        if (!inputIsValid) {
            return AlertElement.Warning('Informe todos os dados por favor!');
        }
        return UserModel.save(values)
            .then((res) => {
                if (!res) {
                    return;
                }
                //alert ok
                AlertElement.Success('Cadastro realizado com sucesso!');
                //move to login
                navigation.navigate('Login');
            })
    }

    UserModel.getAll().then(arr => console.log(arr));

    return (
        <Content>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch', padding: 20 }}>
                <Form>
                    <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View>
                                <Item floatingLabel style={{ marginTop: 15 }}>
                                    <Label>Nome</Label>
                                    <Input
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        value={values.name}
                                        autoCompleteType="name"
                                    />
                                </Item>

                                <Item floatingLabel style={{ marginTop: 15 }}>
                                    <Label>Email</Label>
                                    <Input
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        autoCompleteType="email"
                                    />
                                </Item>

                                <Item floatingLabel style={{ marginTop: 15 }}>
                                    <Label>Telefone</Label>
                                    <Input
                                        onChangeText={handleChange('phone')}
                                        onBlur={handleBlur('phone')}
                                        value={values.phone}
                                        autoCompleteType="tel"
                                    />
                                </Item>

                                <Item floatingLabel style={{ marginTop: 15 }}>
                                    <Label>Endereço</Label>
                                    <Input
                                        onChangeText={handleChange('address')}
                                        onBlur={handleBlur('address')}
                                        value={values.address}
                                        autoCompleteType="street-address"
                                    />
                                </Item>

                                <Item floatingLabel style={{ marginTop: 15 }}>
                                    <Label>Profissão</Label>
                                    <Input
                                        onChangeText={handleChange('profession')}
                                        onBlur={handleBlur('profession')}
                                        value={values.profession}
                                    />
                                </Item>

                                <Item floatingLabel style={{ marginTop: 15 }}>
                                    <Label>Senha</Label>
                                    <Input
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        autoCompleteType="password"
                                        secureTextEntry={true}
                                    />
                                </Item>

                                <Item floatingLabel style={{ marginTop: 15 }}>
                                    <Label>Confirmação de Senha</Label>
                                    <Input
                                        onChangeText={handleChange('passwordCheck')}
                                        onBlur={handleBlur('passwordCheck')}
                                        value={values.passwordCheck}
                                        secureTextEntry={true}
                                    />
                                </Item>

                                <Button onPress={handleSubmit} block primary style={{ marginTop: 30 }}>
                                    <Icon name="save-outline" />
                                    <Text>Cadastrar</Text>
                                </Button>
                            </View>
                        )}
                    </Formik>
                </Form>

                <Button block warning style={{ marginTop: 10 }} onPress={() => navigation.navigate('Login')}>
                    <Icon name="close-outline" />
                    <Text>Cancelar</Text>
                </Button>
            </View>
        </Content>
    );
}

export default RegisterScreen;