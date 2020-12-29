import React, { useState } from 'react';
import { Formik } from 'formik';
import { Icon, Content, Form, Item, Input, Button, Text, View, Label } from "native-base";

import { cryptograph } from "../../utils/commons-utils";
import { RegisterSchema } from '../../utils/schema-validations';

import AlertElement from '../../elements/alert-element';

import UserModel from '../../models/user-model';

const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
    profession: '',
    password: '',
    passwordCheck: '',
}

function RegisterScreen({ navigation }) {
    const [errorText, setErrorText] = useState({});

    function handleOnSubmit(values) {
        return RegisterSchema
            .validate(values)
            .then(async (values) => {
                setErrorText({});
                if (values.password !== values.passwordCheck) {
                    throw { errors: ['A confirmação de senha está diferente!'], path: 'passwordCheck' };
                }
                values = {
                    ...values,
                    password: await cryptograph(values.password),
                    passwordCheck: await cryptograph(values.password),
                }
                return UserModel.save(values);
            })
            .then((res) => {
                if (!res) {
                    throw { errors: ['Não foi possível realizar o cadastro!'], path: '' };
                }
                AlertElement.Success('Cadastro realizado com sucesso!');
                navigation.navigate('Login');
                return true;
            })
            .catch(err => {
                const message = {
                    msg: err.errors[0],
                    input: err.path
                };
                setErrorText(message);
                AlertElement.ToastWarning(message.msg);
                return false;
            });
    }

    return (
        <Content>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch', padding: 20 }}>
                <Form>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleOnSubmit}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View>
                                <Item floatingLabel style={{ marginTop: 15 }} error={errorText.input === 'name'}>
                                    <Label>*Nome Completo</Label>
                                    <Input
                                        autoFocus
                                        name="name"
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        value={values.name}
                                        autoCompleteType="name"
                                    />
                                    {errorText.input === 'name' && <Icon name='close-circle' />}
                                </Item>

                                <Item floatingLabel style={{ marginTop: 15 }} error={errorText.input === 'email'}>
                                    <Label>*Email</Label>
                                    <Input
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        autoCompleteType="email"
                                        textContentType="emailAddress"
                                        keyboardType="email-address"
                                    />
                                    {errorText.input === 'email' && <Icon name='close-circle' />}
                                </Item>

                                <Item floatingLabel style={{ marginTop: 15 }} error={errorText.input === 'phone'}>
                                    <Label>*Telefone</Label>
                                    <Input
                                        onChangeText={handleChange('phone')}
                                        onBlur={handleBlur('phone')}
                                        value={values.phone}
                                        autoCompleteType="tel"
                                        textContentType="telephoneNumber"
                                        keyboardType="phone-pad"
                                    />
                                    {errorText.input === 'phone' && <Icon name='close-circle' />}
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

                                <Item floatingLabel style={{ marginTop: 15 }} error={errorText.input === 'password'}>
                                    <Label>*Senha</Label>
                                    <Input
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        autoCompleteType="password"
                                        secureTextEntry={true}
                                        textContentType="newPassword"
                                    />
                                    {errorText.input === 'password' && <Icon name='close-circle' />}
                                </Item>

                                <Item floatingLabel style={{ marginTop: 15 }} error={errorText.input === 'passwordCheck'}>
                                    <Label>*Confirmação da Senha</Label>
                                    <Input
                                        onChangeText={handleChange('passwordCheck')}
                                        onBlur={handleBlur('passwordCheck')}
                                        value={values.passwordCheck}
                                        autoCompleteType="password"
                                        secureTextEntry={true}
                                        textContentType="newPassword"
                                    />
                                    {errorText.input === 'passwordCheck' && <Icon name='close-circle' />}
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