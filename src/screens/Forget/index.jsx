import React from 'react';
import { Formik } from 'formik';
import { Icon, Content, Form, Item, Input, Button, Text, View, Label } from "native-base";
import * as Yup from 'yup';

import AlertElement from '../../elements/alert-element';

import UserModel from '../../models/user-model';

import API from '../../services/api-service';

const EmailSchema = Yup.object().shape({ email: Yup.string().email('Informe um Email válido!').required('Informe seu email!'), }, [])

function ForgetScreen({ navigation }) {

    function handleOnSubmit(values) {
        return EmailSchema
            .validate(values)
            .then(async ({ email }) => {
                // TODO:
                // (1) procurar usuário com email informado
                // (2) criar uma nova senha e salvar no cadastro
                // (3) enviar email com senha
                const newPass = await UserModel.resetPasswordByEmail(email);
                if (!!newPass) {
                    API.sendForgetPassword(email, newPass);
                }
                AlertElement.Success('Confira seu email com a nova senha!');
                navigation.navigate('Login');
                return true;
            })
            .catch(err => {
                console.error(err);
                const message = {
                    msg: err.errors[0],
                    input: err.path
                };
                AlertElement.ToastWarning(message.msg);
                return false;
            });
    }

    return (
        <Content>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch', padding: 20, marginTop: 50 }}>
                <Form>
                    <Formik initialValues={{ email: "" }} onSubmit={handleOnSubmit}>
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View>
                                <Item floatingLabel style={{ marginTop: 15 }}>
                                    <Label>*Email</Label>
                                    <Input
                                        autoFocus
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        autoCompleteType="email"
                                        textContentType="emailAddress"
                                        keyboardType="email-address"
                                    />
                                </Item>

                                <Button onPress={handleSubmit} block primary style={{ marginTop: 30 }}>
                                    <Icon name="save-outline" />
                                    <Text>Enviar</Text>
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

export default ForgetScreen;