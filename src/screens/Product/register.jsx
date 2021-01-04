import React from 'react';
import { Button, Text, View } from 'native-base';

import ProductModel from '../../models/product-model';

import { useProducts } from '../../contexts/product-context';

const ProductRegisterScreen = ({ route, navigation }) => {
    const {products, setProducts } = useProducts();

    async function save() {
        console.log('save');
    }

    const productEdit = route.params;
    return (
        <View>
            {(!productEdit) ? 
                <View>
                    <Text>Cadastro de Produto</Text>
                    <Button onPress={save}>
                        <Text>Salvar</Text>
                    </Button>
                </View> : 
                <View>Editando</View>
            }
        </View>
    );
}

export default ProductRegisterScreen;