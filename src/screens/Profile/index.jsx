import React, { useState } from 'react';

import { Formik } from 'formik';
import { Icon, Form, Item, Input, Button, Text, View, Label, Content } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { cryptograph } from "../../utils/commons-utils";

import UserModel from '../../models/user-model';

import AlertElement from '../../elements/alert-element';

import AuthenticationUtils from '../../utils/authenticaton-utils';

import { useUser } from '../../contexts/user-context';


const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
    profession: '',
    password: '',
    passwordCheck: '',
}

function ProfileScreen({ navigation }) {
    const { user, setUser } = useUser();

    const [errorText, setErrorText] = useState({});

    function handleOnSubmit(values) { }

    function logout() {
        AuthenticationUtils.logout();
        setUser(null);
    }

    function handleChangePassword() {

    }

    function handleDeleteAccount() {

    }

    useState(() => {
        initialValues.name = user.name;
        initialValues.email = user.email;
        initialValues.phone = user.phone;
        initialValues.address = user.address;
        initialValues.profession = user.profession;
    }, []);

    return (
        <Content>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch', padding: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <MaterialCommunityIcons name="account-circle-outline" size={100} color="#999" />
                </View>
                <Form>
                    <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View>
                                <Item floatingLabel style={{ marginTop: 35 }} error={errorText.input === 'name'}>
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

                                <Button onPress={handleSubmit} block primary style={{ marginTop: 30 }}>
                                    <Icon name="save-outline" />
                                    <Text>Salvar</Text>
                                </Button>
                            </View>
                        )}
                    </Formik>
                </Form>

                <Button block info style={{ marginTop: 15 }} onPress={handleChangePassword}>
                    <Icon name="key" />
                    <Text>Alterar Senha</Text>
                </Button>

                <Button block danger style={{ marginTop: 15 }} onPress={handleDeleteAccount}>
                    <Icon name="trash" />
                    <Text>Excluir Conta</Text>
                </Button>

                <Button block dark style={{ marginTop: 15 }} onPress={logout}>
                    <Icon name="log-out" />
                    <Text>Sair</Text>
                </Button>

                <Button block warning style={{ marginTop: 15 }} onPress={() => navigation.navigate('Main')}>
                    <Icon name="close-outline" />
                    <Text>Cancelar</Text>
                </Button>
            </View>
        </Content>
    );
}

export default ProfileScreen;