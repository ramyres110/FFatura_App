import React from 'react';

import ListScreen from '../../components/listScreen-component';

import { useProducts } from '../../contexts/product-context';

function ProductScreen({ navigation }) {
    const { products } = useProducts();
    
    return (
        <ListScreen
            data={products}
            onItemSelected={(item) => { navigation.push('ProductRegister', item)}}
            onNewClick={() => { navigation.push('ProductRegister')}}            
            options={{ icon: "cart", label: 'productDescription' }}            
        />
    );
}

export default ProductScreen;