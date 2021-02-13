import React, { useState } from 'react';
import { Formik } from 'formik';
import { Icon, Item, Input, Button, Text, View, Label, Picker } from "native-base";

import FormContent from '../../components/formContent-component';

import { ServiceSchema } from '../../utils/schema-validations';

import AlertElement from '../../elements/alert-element';

import { useServices } from '../../contexts/service-context';

import ServiceModel from '../../models/service-model';

const ServiceRegisterScreen = ({ route, navigation }) => {
    const [errorText, setErrorText] = useState({});
    const { services, setServices } = useServices();

    const ServiceEdit = route.params;

    function handleOnSubmit(values) {
        console.log(values);
        return;
        ServiceSchema.validate(values)
            .then(async (values) => {
                if (!ServiceEdit) {
                    const res = await ServiceModel.save(values);
                    if (!res) {
                        throw { errors: ['Não foi possível realizar o cadastro!'], path: '' };
                    }
                    setServices(Services.concat(res));
                    AlertElement.Success('Cadastro realizado com sucesso!');
                } else {
                    const res = await ServiceModel.update(ServiceEdit.uid, values);
                    if (!res) {
                        throw { errors: ['Não foi possível realizar a alteração!'], path: '' };
                    }
                    setServices(Services.map(item => (item.uid != ServiceEdit.uid) ? item : res));
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
        AlertElement.Question(`Deseja realmente excluir o item ${ServiceEdit.name}?`, async () => {
            await ServiceModel.drop(ServiceEdit.uid);
            AlertElement.Success('Exclusão realizada com sucesso!');
            setServices(Services.filter(res => res.uid !== ServiceEdit.uid));
            navigation.goBack();
            return true;
        });
    }

    return (
        <FormContent>
            <Formik
                initialValues={{
                    description:"",
                    group:""
                }}
                onSubmit={handleOnSubmit}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <Item floatingLabel style={{ marginTop: 15 }} error={errorText.input === 'description'}>
                            <Label>*Descrição</Label>
                            <Input
                                name="description"
                                onChangeText={handleChange('description')}
                                onBlur={handleBlur('description')}
                                value={values.description}
                            />
                            {errorText.input === 'description' && <Icon name='close-circle' />}
                        </Item>

                        {/* <Item picker floatingLabel> */}
                            <Picker
                                name="group"
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={values.group}
                                onValueChange={handleChange('group')}
                            >
                                <Picker.Item label="Wallet" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                                <Picker.Item label="Debit Card" value="key2" />
                                <Picker.Item label="Credit Card" value="key3" />
                                <Picker.Item label="Net Banking" value="key4" />
                            </Picker>
                            {errorText.input === 'description' && <Icon name='close-circle' />}
                        {/* </Item> */}

                        <Button onPress={handleSubmit} block primary style={{ marginTop: 30 }}>
                            <Icon name="save-outline" />
                            <Text>Salvar</Text>
                        </Button>
                    </View>
                )}
            </Formik>

            {(!!ServiceEdit) &&
                <Button block danger style={{ marginTop: 10 }} onPress={deleteItem}>
                    <Icon name="trash" />
                    <Text>Excluir</Text>
                </Button>
            }

            <Button block warning style={{ marginTop: 10 }} onPress={() => navigation.goBack()}>
                <Icon name="close-outline" />
                <Text>Cancelar</Text>
            </Button>

            {(!!ServiceEdit) &&
                <View style={{ marginTop: 30 }}>
                    <Text note>{`Código: ${ServiceEdit.uid}`}</Text>
                    <Text note>{`Dt Cadastro: ${(new Date(ServiceEdit.createdAt)).toLocaleString()}`}</Text>
                    <Text note>{`Dt Alteração: ${(new Date(ServiceEdit.changedAt)).toLocaleString()}`}</Text>
                </View>
            }
        </FormContent>
    );
}

export default ServiceRegisterScreen;