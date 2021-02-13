import React from 'react';

import ListScreen from '../../components/listScreen-component';

import { useServices } from '../../contexts/service-context';

function ServiceScreen({ navigation }) {
    const { services } = useServices();

    return (
        <ListScreen
            data={services}
            screenHandler="ServiceRegister"
            navigation={navigation}
            options={{ icon: "briefcase" }}
            // extraRightComponent={(item) => <Text>{`${item.commission} % `}</Text>}
        />
    );
}

export default ServiceScreen;