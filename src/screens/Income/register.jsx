import React, { useState } from 'react';
import { Formik } from 'formik';
import { Icon, Item, Input, Button, Text, View, Label } from "native-base";

import FormContent from '../../components/formContent-component';

import { IncomeSchema } from '../../utils/schema-validations';

import AlertElement from '../../elements/alert-element';

import { useIncomes } from '../../contexts/income-context';

import IncomeModel from '../../models/income-model';

const IncomeRegisterScreen = ({ route, navigation }) => {
    const [errorText, setErrorText] = useState({});
    const { incomes, setIncomes } = useIncomes();

    const incomeEdit = route.params;

    function handleOnSubmit(values) {
        IncomeSchema.validate(values)
            .then(async (values) => {
                if (!incomeEdit) {
                    const res = await IncomeModel.save(values);
                    if (!res) {
                        throw { errors: ['Não foi possível realizar o cadastro!'], path: '' };
                    }
                    setIncomes(Incomes.concat(res));
                    AlertElement.Success('Cadastro realizado com sucesso!');
                } else {
                    const res = await IncomeModel.update(incomeEdit.uid, values);
                    if (!res) {
                        throw { errors: ['Não foi possível realizar a alteração!'], path: '' };
                    }
                    setIncomes(Incomes.map(item => (item.uid != incomeEdit.uid) ? item : res));
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
        AlertElement.Question(`Deseja realmente excluir o item ${incomeEdit.name}?`, async () => {
            await IncomeModel.drop(incomeEdit.uid);
            AlertElement.Success('Exclusão realizada com sucesso!');
            setIncomes(Incomes.filter(res => res.uid !== incomeEdit.uid));
            navigation.goBack();
            return true;
        });
    }

    return (
        <FormContent>
            <Formik
                initialValues={{

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

                        <Button onPress={handleSubmit} block primary style={{ marginTop: 30 }}>
                            <Icon name="save-outline" />
                            <Text>Salvar</Text>
                        </Button>
                    </View>
                )}
            </Formik>

            {(!!incomeEdit) &&
                <Button block danger style={{ marginTop: 10 }} onPress={deleteItem}>
                    <Icon name="trash" />
                    <Text>Excluir</Text>
                </Button>
            }

            <Button block warning style={{ marginTop: 10 }} onPress={() => navigation.goBack()}>
                <Icon name="close-outline" />
                <Text>Cancelar</Text>
            </Button>

            {(!!incomeEdit) &&
                <View style={{ marginTop: 30 }}>
                    <Text note>{`Código: ${incomeEdit.uid}`}</Text>
                    <Text note>{`Dt Cadastro: ${(new Date(incomeEdit.createdAt)).toLocaleString()}`}</Text>
                    <Text note>{`Dt Alteração: ${(new Date(incomeEdit.changedAt)).toLocaleString()}`}</Text>
                </View>
            }
        </FormContent>
    );
}

export default IncomeRegisterScreen;