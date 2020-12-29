import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { Icon, Item, Input, Button, Text, View, Label } from "native-base";


import FormContent from '../../components/formContent-component';
import { GroupSchema } from '../../utils/schema-validations';

import AlertElement from '../../elements/alert-element';

import { useGroup } from '../../contexts/group-context';
import GroupModel from '../../models/group-model';

const GroupRegisterScreen = ({ route, navigation }) => {
    const [errorText, setErrorText] = useState({});
    const { groups, setGroups } = useGroup();

    const groupEdit = route.params;

    function handleOnSubmit(values) {
        GroupSchema.validate(values)
            .then(async (values) => {
                if (!groupEdit) {
                    const res = await GroupModel.save(values);
                    if (!res) {
                        throw { errors: ['Não foi possível realizar o cadastro!'], path: '' };
                    }
                    setGroups(groups.concat(res));
                    AlertElement.Success('Cadastro realizado com sucesso!');
                } else {
                    const res = await GroupModel.update(groupEdit.uid, values);
                    if (!res) {
                        throw { errors: ['Não foi possível realizar a alteração!'], path: '' };
                    }
                    setGroups(groups.map(item => (item.uid != groupEdit.uid) ? item : res));
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
        AlertElement.Question(`Deseja realmente excluir o item ${groupEdit.name}?`, async () => {
            await GroupModel.drop(groupEdit.uid);
            AlertElement.Success('Exclusão realizada com sucesso!');
            setGroups(groups.filter(res => res.uid !== groupEdit.uid));
            navigation.goBack();
            return true;
        });
    }

    return (
        <FormContent>
            <Formik
                initialValues={{
                    name: (!groupEdit) ? "" : groupEdit.name,
                    commission: (!groupEdit) ? "" : groupEdit.commission + "",
                }}
                onSubmit={handleOnSubmit}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <Item floatingLabel style={{ marginTop: 15 }} error={errorText.input === 'name'}>
                            <Label>*Nome do Grupo</Label>
                            <Input
                                name="name"
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                                autoCompleteType="name"
                            />
                            {errorText.input === 'name' && <Icon name='close-circle' />}
                        </Item>

                        <Item floatingLabel style={{ marginTop: 15 }} error={errorText.input === 'name'}>
                            <Label>*Comissão (%, Ex: 5 = 5%)</Label>
                            <Input
                                name="commission"
                                onChangeText={handleChange('commission')}
                                onBlur={handleBlur('commission')}
                                value={values.commission}
                                autoCompleteType="cc-number"
                                textContentType="none"
                                keyboardType="numeric"
                            />
                            {errorText.input === 'commission' && <Icon name='close-circle' />}
                        </Item>

                        <Button onPress={handleSubmit} block primary style={{ marginTop: 30 }}>
                            <Icon name="save-outline" />
                            <Text>Salvar</Text>
                        </Button>
                    </View>
                )}
            </Formik>

            {(!!groupEdit) &&
                <Button block danger style={{ marginTop: 10 }} onPress={deleteItem}>
                    <Icon name="trash" />
                    <Text>Excluir</Text>
                </Button>
            }

            <Button block warning style={{ marginTop: 10 }} onPress={() => navigation.goBack()}>
                <Icon name="close-outline" />
                <Text>Cancelar</Text>
            </Button>

            {(!!groupEdit) &&
                <View style={{ marginTop: 30 }}>
                    <Text note>{`Código: ${groupEdit.uid}`}</Text>
                    <Text note>{`Dt Cadastro: ${(new Date(groupEdit.createdAt)).toLocaleString()}`}</Text>
                    <Text note>{`Dt Alteração: ${(new Date(groupEdit.changedAt)).toLocaleString()}`}</Text>
                </View>
            }
        </FormContent>
    );
}

export default GroupRegisterScreen;