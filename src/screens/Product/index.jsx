import React, { Fragment } from 'react';
import ListScreen from '../../components/listScreen-component';
import { ScrollableTab, Tab, Tabs, Text } from 'native-base';

import { useProducts } from '../../contexts/product-context';

function ProductScreen({ navigation }) {
    const { products } = useProducts();

    return (
        <ListScreen
            data={products}
            onItemSelected={() => { }}
        />
    );
}

export default ProductScreen;