import React, { useState } from 'react';

import { Formik } from 'formik';
import { Icon, Form, Item, Input, Button, Text, View, Label, Content } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import UserModel from '../../models/user-model';

import AlertElement from '../../elements/alert-element';

import AuthenticationUtils from '../../utils/authenticaton-utils';

import { useUser } from '../../contexts/user-context';
import { ProfileSchema } from '../../utils/schema-validations';


const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
    profession: '',
    scholarity: '',
    occupation: '',
    workAs: ''
}

function ProfileScreen({ navigation }) {
    const { user, setUser } = useUser();

    const [errorText, setErrorText] = useState({});


    function logout() {
        AuthenticationUtils.logout();
        setUser(null);
    }

    function errorCall(err) {
        const message = {
            msg: err.errors[0],
            input: err.path
        };
        setErrorText(message);
        AlertElement.ToastWarning(message.msg);
        return false;
    }

    function saveChange(values) {
        const newData = {
            ...user,
            ...values
        }
        return UserModel.update(user.uid, newData)
            .then((res) => {
                if (!res) {
                    throw { errors: ['Não foi possível salvar as alterações!'], path: '' };
                }
                setUser(res);
                AlertElement.Success('Alterações salvas com sucesso!');
                return true;
            })
            .catch(errorCall);
    }

    function deleteAccount() { }

    function handleOnSubmit(values) {
        return ProfileSchema
            .validate(values)
            .then(async (values) => {
                AlertElement.Question(
                    'Deseja salvar as alterações?',
                    () => {
                        saveChange(values)
                    }
                );
            })
            .catch(errorCall);
    }

    function handleChangePassword() {

    }

    function handleDeleteAccount() {
        AlertElement.Question(
            'Excluindo sua conta, todos seus dados serão perdidos. Deseja continuar?',
            () => {
                AlertElement.Question(
                    'Confirma exclusão?',
                    () => deleteAccount()
                );
            }
        );
    }

    useState(() => {
        initialValues.name = user.name;
        initialValues.email = user.email;
        initialValues.phone = user.phone;
        initialValues.address = user.address || "";
        initialValues.profession = user.profession || "";
        initialValues.scholarity = user.scholarity || "";
        initialValues.occupation = user.occupation || "";
        initialValues.workAs = user.workAs || "";
    }, []);

    return (
        <Content>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch', padding: 20 }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <MaterialCommunityIcons name="account-circle-outline" size={100} color="#999" />
                    <Text note>{user.uid}</Text>
                </View>
                <Form>
                    <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View>
                                <Item floatingLabel style={{ marginTop: 35 }} error={errorText.input === 'name'}>
                                    <Label>*Nome Completo</Label>
                                    <Input
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
                                    <Label>Escolaridade</Label>
                                    <Input
                                        onChangeText={handleChange('scholarity')}
                                        onBlur={handleBlur('scholarity')}
                                        value={values.scholarity}
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
                                    <Label>Cargo/Função</Label>
                                    <Input
                                        onChangeText={handleChange('occupation')}
                                        onBlur={handleBlur('occupation')}
                                        value={values.occupation}
                                    />
                                </Item>

                                <Item floatingLabel style={{ marginTop: 15 }}>
                                    <Label>Vinculo de trabalho</Label>
                                    <Input
                                        onChangeText={handleChange('workAs')}
                                        onBlur={handleBlur('workAs')}
                                        value={values.workAs}
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