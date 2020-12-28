import React from "react";
import { Formik } from "formik";
import { Icon, Content, Form, Item, Input, Button, Text, View, Label } from "native-base";

import Brand from "../../components/brand-component";

import { useUser } from '../../contexts/user-context';

import AlertElement from '../../elements/alert-element';
import UserModel from "../../models/user-model";

import AuthenticationUtils from '../../utils/authenticaton-utils';

function LoginScreen({ navigation }) {
    const { setUser } = useUser();

    function handleOnSubmit(values) {
        const { email, password } = values;
        if (!email || !password) {
            AlertElement.Warning('Informe o usuário e a senha para prosseguir!');
            return false;
        }

        UserModel.getByEmailAndPass(email, password)
            .then(user => {
                if (!user) {
                    AlertElement.Warning('Usuário ou senha inválidos!');
                    return false;
                }
                AuthenticationUtils.setAuthenticatedUser(user.uid);
                setUser(user);
                return true;
            });
    }

    return (

        <Content style={{ padding: 30 }}>
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 50 }}>
                <Brand />
            </View>

            <Form style={{ marginTop: 50 }}>
                <Formik initialValues={{ email: '', password: '' }} onSubmit={handleOnSubmit}>
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View>
                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    autoCompleteType="email"
                                    textContentType="emailAddress"
                                    keyboardType="email-address"
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
                                    textContentType="newPassword"
                                />
                            </Item>

                            <Button onPress={handleSubmit} block primary style={{ marginTop: 20 }}>
                                <Icon name="log-in-outline" />
                                <Text>Entrar</Text>
                            </Button>
                        </View>
                    )}
                </Formik>
            </Form>

            <Button block warning style={{ marginTop: 10 }} onPress={() => navigation.navigate('Forget')}>
                <Icon name="help-circle-outline" />
                <Text>Esqueci a senha</Text>
            </Button>

            <Button block info style={{ marginTop: 50 }} onPress={() => navigation.navigate('Register')}>
                <Icon style={{ color: "#fff" }} name="person-add-outline" />
                <Text style={{ color: "#fff" }}>Cadastrar-me</Text>
            </Button>
        </Content>
    );
}

export default LoginScreen;