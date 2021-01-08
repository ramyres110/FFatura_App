import React, { Fragment } from 'react';
import ListScreen from '../../components/listScreen-component';
import { ScrollableTab, Tab, Tabs, Text } from 'native-base';

import { useProducts } from '../../contexts/product-context';

function ProductScreen({ navigation }) {
    const { products } = useProducts();

    return (
        <ListScreen
            data={products}
            screenHandler="ProductRegister"
            navigation={navigation}
            options={{ icon: "trophy-outline" }}
            onItemSelected={() => { }}
        />
    );
}

export default ProductScreen;