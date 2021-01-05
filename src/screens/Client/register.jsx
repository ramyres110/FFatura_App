import React, { useState } from 'react';
import { Formik } from 'formik';
import { Icon, Item, Input, Button, Text, View, Label } from "native-base";

import FormContent from '../../components/formContent-component';

import { ClientSchema } from '../../utils/schema-validations';

import AlertElement from '../../elements/alert-element';

import ClientModel from "../../models/client-model";

import { useClients } from "../../contexts/client-context";



const ClientRegisterScreen = ({ route, navigation }) => {
    const [errorText, setErrorText] = useState({});
    const { clients, setClients } = useClients();

    const clientEdit = route.params;

    function handleOnSubmit(values) {
        ClientSchema.validate(values)
            .then(async (values) => {
                if (!clientEdit) {
                    const res = await ClientModel.save(values);
                    if (!res) {
                        throw { errors: ['Não foi possível realizar o cadastro!'], path: '' };
                    }
                    setClients(clients.concat(res));
                    AlertElement.Success('Cadastro realizado com sucesso!');
                } else {
                    const res = await ClientModel.update(clientEdit.uid, values);
                    if (!res) {
                        throw { errors: ['Não foi possível realizar a alteração!'], path: '' };
                    }
                    setClients(clients.map(item => (item.uid != clientEdit.uid) ? item : res));
                    AlertElement.Success('Alteração realizada com sucesso!');
                }
                navigation.goBack();
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
            })
    }

    function deleteItem() {
        AlertElement.Question(`Deseja realmente excluir o item ${clientEdit.name}?`, async () => {
            await ClientModel.drop(clientEdit.uid);
            AlertElement.Success('Exclusão realizada com sucesso!');
            setClients(clients.filter(res => res.uid !== clientEdit.uid));
            navigation.goBack();
            return true;
        });
    }

    return (
        <FormContent>
            <Formik
                initialValues={{
                    name: (!clientEdit) ? "" : clientEdit.name,
                    document: (!clientEdit) ? "" : clientEdit.document,
                    phone: (!clientEdit) ? "" : clientEdit.phone,
                    email: (!clientEdit) ? "" : clientEdit.email,
                    address: (!clientEdit) ? "" : clientEdit.address,
                    obs: (!clientEdit) ? "" : clientEdit.obs,
                }}
                onSubmit={handleOnSubmit}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <Item floatingLabel style={{ marginTop: 15 }} error={errorText.input === 'name'}>
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

                        <Item floatingLabel style={{ marginTop: 15 }} error={errorText.input === 'document'}>
                            <Label>Documento</Label>
                            <Input
                                name="document"
                                onChangeText={handleChange('document')}
                                onBlur={handleBlur('document')}
                                value={values.document}
                                keyboardType="number-pad"
                            />
                            {errorText.input === 'document' && <Icon name='close-circle' />}
                        </Item>

                        <Item floatingLabel style={{ marginTop: 15 }} error={errorText.input === 'phone'}>
                            <Label>Telefone</Label>
                            <Input
                                name="phone"
                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                                value={values.phone}
                                autoCompleteType="tel"
                                keyboardType="number-pad"
                            />
                            {errorText.input === 'phone' && <Icon name='close-circle' />}
                        </Item>

                        <Item floatingLabel style={{ marginTop: 15 }} error={errorText.input === 'email'}>
                            <Label>Email</Label>
                            <Input
                                name="email"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                autoCompleteType="email"
                                keyboardType="email-address"
                            />
                            {errorText.input === 'email' && <Icon name='close-circle' />}
                        </Item>

                        <Item floatingLabel style={{ marginTop: 15 }} error={errorText.input === 'address'}>
                            <Label>Endereço</Label>
                            <Input
                                name="address"
                                onChangeText={handleChange('address')}
                                onBlur={handleBlur('address')}
                                value={values.address}
                                autoCompleteType="street-address"
                                keyboardType="default"
                            />
                            {errorText.input === 'address' && <Icon name='close-circle' />}
                        </Item>

                        <Item floatingLabel style={{ marginTop: 15 }} error={errorText.input === 'obs'}>
                            <Label>Observações</Label>
                            <Input
                                multiline={true}
                                numberOfLines={4}
                                name="obs"
                                onChangeText={handleChange('obs')}
                                onBlur={handleBlur('obs')}
                                value={values.obs}
                                keyboardType="default"
                            />
                            {errorText.input === 'obs' && <Icon name='close-circle' />}
                        </Item>

                        <Button onPress={handleSubmit} block primary style={{ marginTop: 30 }}>
                            <Icon name="save-outline" />
                            <Text>Salvar</Text>
                        </Button>
                    </View>
                )}
            </Formik>

            {(!!clientEdit) &&
                <Button block danger style={{ marginTop: 10 }} onPress={deleteItem}>
                    <Icon name="trash" />
                    <Text>Excluir</Text>
                </Button>
            }

            <Button block warning style={{ marginTop: 10 }} onPress={() => navigation.goBack()}>
                <Icon name="close-outline" />
                <Text>Cancelar</Text>
            </Button>

            {(!!clientEdit) &&
                <View style={{ marginTop: 30 }}>
                    <Text note>{`Código: ${clientEdit.uid}`}</Text>
                    <Text note>{`Dt Cadastro: ${(new Date(clientEdit.createdAt)).toLocaleString()}`}</Text>
                    <Text note>{`Dt Alteração: ${(new Date(clientEdit.changedAt)).toLocaleString()}`}</Text>
                </View>
            }
        </FormContent>
    );
}

export default ClientRegisterScreen;