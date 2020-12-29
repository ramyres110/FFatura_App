import React from 'react';

import ListScreen from '../../components/listScreen-component';

import { useBillings } from "../../contexts/billing-context";

function BillingScreen({ navigation }) {
    const { billings } = useBillings();

    return (<ListScreen
        data={billings}
        screenHandler="BillingRegister"
        navigation={navigation}
        options={{
            addBtnLabel: "Faturar Lançamentos",
            addBtnIcon: "calculator"
        }} />);
}

export default BillingScreen;