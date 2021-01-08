import React, { useState } from 'react';
import { Formik } from 'formik';
import { Icon, Item, Input, Button, Text, View, Label } from 'native-base';

import FormContent from '../../components/formContent-component';
import ProductModel from '../../models/product-model';

import { ProductSchema } from '../../utils/schema-validations';

import { AlertElement } from '../../elements/alert-element';


import { useProducts } from '../../contexts/product-context';

const ProductRegisterScreen = ({ route, navigation }) => {
    const [errorText, setErrorText] = useState({});
    const { products, setProducts } = useProducts();

    const productEdit = route.params;

    function handleOnSubmit(values) {
        ProductSchema.validate(values)
        .then(async (values) => {
            if (!productEdit) {
                const res = await ProductModel.save(values);
                if (!res) {
                    throw { errors: ['Não foi possível realizar o cadastro!'], path: ''};
                }
                setProducts(products.concat(res));
                AlertElement.Success('Cadastro realizado com sucesso!');
            } else {
                const res = await ProductModel.update(productEdit.uid, values);
                if (!res) {
                    throw { errors: ['Não foi possível realizar a alteração!'], path: ''};
                }
                setProducts(products.map(item => (item.uid != productEdit.uid) ? item : res));
                AlertElement.Success('Alteração realizada com sucesso!');
            }
        })
    }

    function deleteItem() {

    }

    return (
        <FormContent>
            <Formik
                initialValues={{
                    productCode: (!productEdit) ? "" : productEdit.productCode,
                    productGroup: (!productEdit) ? "" : productEdit.productGroup,
                    productDescription: (!productEdit) ? "" : productEdit.productDescription,
                    productBrand: (!productEdit) ? "" : productEdit.productBrand,
                    productUnit: (!productEdit) ? "" : productEdit.productUnit,
                    productPrice: (!productEdit) ? "" : productEdit.productPrice,
                    productMaxDiscount: (!productEdit) ? "" : productEdit.productMaxDiscount,
                    productPaymentType: (!productEdit) ? "" : productEdit.productPaymentType,
                    productCST: (!productEdit) ? "" : productEdit.productCST,
                    productNCM: (!productEdit) ? "" : productEdit.productNCM,
                }}
                onSubmit={handleOnSubmit}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <Item floatingLabel style={{ marginTop: 15 }} error={errorText.input === 'productCode'}>
                            <Label>*Código</Label>
                            <Input
                                name='productCode'
                                onChangeText={handleChange('productCode')}
                                onBlur={handleBlur('productCode')}
                                value={values.productCode}
                                keyboardType='number-pad'
                            />
                            {errorText.input === 'productCode' && <Icon name='close-circle' />}
                        </Item>

                        <Item floatingLabel style={{ marginTop: 15 }} error={errorText.input === 'productGroup'}>
                            <Label>Grupo</Label>
                            <Input
                                name='productGroup'
                                onChangeText={handleChange('productGroup')}
                                onBlur={handleBlur('productGroup')}
                                value={values.productGroup}
                                keyboardType='default'
                            />
                            {errorText.input === 'productGroup' && <Icon name='close-circle' />}
                        </Item>

                        <Item floatingLabel style={{marginTop: 15}} error={errorText.input === 'productDescription'}>
                            <Label>Descrição</Label>
                            <Input
                                name='productDescription'
                                onChangeText={handleChange('productDescription')}
                                onBlur={handleBlur('productDescription')}
                                value={values.productDescription}
                                keyboardType='default'
                            />
                            {errorText.input === 'productDescription' && <Icon name='close-circle' />}
                        </Item>

                        <Item floatingLabel style={{marginTop: 15}} error={errorText.input === 'productBrand'}>
                            <Label>Marca</Label>
                            <Input
                                name='productBrand'
                                onChangeText={handleChange('productBrand')}
                                onBlur={handleBlur('productBrand')}
                                value={values.productBrand}
                                keyboardType='productBrand'
                            />
                            {errorText.input === 'productBrand' && <Icon name='close-circle' />}
                        </Item>

                        <Item floatingLabel style={{marginTop: 15}} error={errorText.input === 'productUnit'}>
                            <Label>Unidade</Label>
                            <Input
                                name='productUnit'
                                onChangeText={handleChange('productUnit')}
                                onBlur={handleBlur('productUnit')}
                                value={values.productUnit}
                                keyboardType='default'
                            />
                            {errorText.input === 'productUnit' && <Icon name='close-circle' />}
                        </Item>

                        <Item floatingLabel style={{marginTop: 15}} error={errorText.input === 'productPrice'}>
                            <Label>Preço</Label>
                            <Input
                                name='productPrice'
                                onChangeText={handleChange('productPrice')}
                                onBlur={handleBlur('productPrice')}
                                value={values.productPrice}
                                keyboardType='number-pad'
                            />
                            {errorText.input === 'productPrice' && <Icon name='close-circle' />}
                        </Item>

                        <Item floatingLabel style={{marginTop: 15}} error={errorText.input === 'productMaxDiscount'}>
                            <Label>Desconto Máximo</Label>
                            <Input
                                name='productMaxDiscount'
                                onChangeText={handleChange('productMaxDiscount')}
                                onBlur={handleBlur('productMaxDiscount')}
                                value={values.productMaxDiscount}
                                keyboardType='number-pad'
                            />
                            {errorText.input === 'productMaxDiscount' && <Icon name='close-circle' />}
                        </Item>

                        <Item floatingLabel style={{marginTop: 15}} error={errorText.input === 'productPaymentType'}>
                            <Label>Tipo de Pagamento</Label>
                            <Input
                                name='productPaymentType'
                                onChangeText={handleChange('productPaymentType')}
                                onBlur={handleBlur('productPaymentType')}
                                value={values.productPaymentType}
                                keyboardType='default'
                            />
                            {errorText.input === 'productPaymentType' && <Icon name='close-circle' />}
                        </Item>

                        <Item floatingLabel style={{marginTop: 15}} error={errorText.input === 'productCST'}>
                            <Label>CST</Label>
                            <Input
                                name='productCST'
                                onChangeText={handleChange('productCST')}
                                onBlur={handleBlur('productCST')}
                                value={values.productCST}
                                keyboardType='number-pad'
                            />
                            {errorText.input === 'productCST' && <Icon name='close-circle' />}
                        </Item>

                        <Item floatingLabel style={{marginTop: 15}} error={errorText.input === 'productNCM'}>
                            <Label>NCM</Label>
                            <Input
                                name='productNCM'
                                onChangeText={handleChange('productNCM')}
                                onBlur={handleBlur('productNCM')}
                                value={values.productNCM}
                                keyboardType='number-pad'
                            />
                            {errorText.input === 'productDescription' && <Icon name='close-circle' />}
                        </Item>

                        <Button onPress={handleSubmit} block primary style={{ marginTop: 30 }}>
                            <Icon name="save-outline" />
                            <Text>Salvar</Text>
                        </Button>
                    </View>
                )}
            </Formik>
            {(!!productEdit) &&
                <Button block danger style={{ marginTop: 10 }} onPress={deleteItem}>
                    <Icon name="trash" />
                    <Text>Excluir</Text>
                </Button>
            }

            <Button block warning style={{ marginTop: 10 }} onPress={() => navigation.goBack()}>
                <Icon name="close-outline" />
                <Text>Cancelar</Text>
            </Button>
        </FormContent>
    );
}

export default ProductRegisterScreen;
// Grupo
// Comissão
// - Código
// - Grupo
// - Descrição
// - Marca
// - Unidade (UN, CX, KG,...)
// - Preço
// - Máx Desconto
// - Pagamentos
//     - Tipo de Pagamento (A vista, Parcelado,...)
//     - Pagamento Com (Dinheiro, Cartão de Crédito, Cartão de Débito, Etc)
//     - Juros
//     - Comissão
// - CST (Código de Situação Tributária)
// - NCM (Nomenclatura Comum do Mercosul)