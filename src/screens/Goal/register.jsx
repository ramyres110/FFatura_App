import React, { useState } from 'react';
import { Formik } from 'formik';
import { Icon, Item, Input, Button, Text, View, Label } from "native-base";


import FormContent from '../../components/formContent-component';
import { GoalSchema } from '../../utils/schema-validations';

import AlertElement from '../../elements/alert-element';

import { useGoal } from '../../contexts/goal-context';
import GoalModel from '../../models/goal-model';

const GoalRegisterScreen = ({ route, navigation }) => {
    const [errorText, setErrorText] = useState({});
    const { goals, setGoals } = useGoal();

    const goalEdit = route.params;

    function handleOnSubmit(values) {
        GoalSchema.validate(values)
            .then(async (values) => {
                if (!goalEdit) {
                    const res = await GoalModel.save(values);
                    if (!res) {
                        throw { errors: ['Não foi possível realizar o cadastro!'], path: '' };
                    }
                    setGoals(goals.concat(res));
                    AlertElement.Success('Cadastro realizado com sucesso!');
                } else {
                    const res = await GoalModel.update(goalEdit.uid, values);
                    if (!res) {
                        throw { errors: ['Não foi possível realizar a alteração!'], path: '' };
                    }
                    setGoals(goals.map(item => (item.uid != goalEdit.uid) ? item : res));
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
        AlertElement.Question(`Deseja realmente excluir o item ${goalEdit.name}?`, async () => {
            await GoalModel.drop(goalEdit.uid);
            AlertElement.Success('Exclusão realizada com sucesso!');
            setGoals(goals.filter(res => res.uid !== goalEdit.uid));
            navigation.goBack();
            return true;
        });
    }

    return (
        <FormContent>
            <Formik
                initialValues={{
                    name: (!goalEdit) ? "" : goalEdit.name,
                    incomes: (!goalEdit) ? "" : goalEdit.incomes,
                    sales: (!goalEdit) ? "" : goalEdit.sales,
                    profit: (!goalEdit) ? "" : goalEdit.profit,
                }}
                onSubmit={handleOnSubmit}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <Item floatingLabel style={{ marginTop: 15 }} error={errorText.input === 'name'}>
                            <Label>*Nome da Meta</Label>
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
                            <Label>*Faturamento Total (R$)</Label>
                            <Input
                                name="incomes"
                                onChangeText={handleChange('incomes')}
                                onBlur={handleBlur('incomes')}
                                value={values.incomes}
                                autoCompleteType="cc-number"
                                textContentType="none"
                                keyboardType="numeric"
                            />
                            {errorText.input === 'incomes' && <Icon name='close-circle' />}
                        </Item>

                        <Item floatingLabel style={{ marginTop: 15 }} error={errorText.input === 'name'}>
                            <Label>*Total Vendas (R$)</Label>
                            <Input
                                name="sales"
                                onChangeText={handleChange('sales')}
                                onBlur={handleBlur('sales')}
                                value={values.sales}
                                autoCompleteType="cc-number"
                                textContentType="none"
                                keyboardType="numeric"
                            />
                            {errorText.input === 'sales' && <Icon name='close-circle' />}
                        </Item>

                        <Item floatingLabel style={{ marginTop: 15 }} error={errorText.input === 'name'}>
                            <Label>*Lucro Total (R$)</Label>
                            <Input
                                name="profit"
                                onChangeText={handleChange('profit')}
                                onBlur={handleBlur('profit')}
                                value={values.profit}
                                autoCompleteType="cc-number"
                                textContentType="none"
                                keyboardType="numeric"
                            />
                            {errorText.input === 'profit' && <Icon name='close-circle' />}
                        </Item>

                        <Item floatingLabel style={{ marginTop: 15 }} error={errorText.input === 'name'}>
                            <Label>Data Inicial</Label>
                            <Input
                                name="dtInit"
                                onChangeText={handleChange('dtInit')}
                                onBlur={handleBlur('dtInit')}
                                value={values.dtInit}
                                autoCompleteType="cc-number"
                                textContentType="none"
                                keyboardType="numeric"
                            />
                            {errorText.input === 'dtInit' && <Icon name='close-circle' />}
                        </Item>

                        <Item floatingLabel style={{ marginTop: 15 }} error={errorText.input === 'name'}>
                            <Label>*Data Final</Label>
                            <Input
                                name="dtEnd"
                                onChangeText={handleChange('dtEnd')}
                                onBlur={handleBlur('dtEnd')}
                                value={values.dtEnd}
                                autoCompleteType="cc-number"
                                textContentType="none"
                                keyboardType="numeric"
                            />
                            {errorText.input === 'dtEnd' && <Icon name='close-circle' />}
                        </Item>

                        <Button onPress={handleSubmit} block primary style={{ marginTop: 30 }}>
                            <Icon name="save-outline" />
                            <Text>Salvar</Text>
                        </Button>
                    </View>
                )}
            </Formik>

            {(!!goalEdit) &&
                <Button block danger style={{ marginTop: 10 }} onPress={deleteItem}>
                    <Icon name="trash" />
                    <Text>Excluir</Text>
                </Button>
            }

            <Button block warning style={{ marginTop: 10 }} onPress={() => navigation.goBack()}>
                <Icon name="close-outline" />
                <Text>Cancelar</Text>
            </Button>

            {(!!goalEdit) &&
                <View style={{ marginTop: 30 }}>
                    <Text note>{`Código: ${goalEdit.uid}`}</Text>
                    <Text note>{`Dt Cadastro: ${(new Date(goalEdit.createdAt)).toLocaleString()}`}</Text>
                    <Text note>{`Dt Alteração: ${(new Date(goalEdit.changedAt)).toLocaleString()}`}</Text>
                </View>
            }
        </FormContent>
    );
}

export default GoalRegisterScreen;