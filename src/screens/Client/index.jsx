import React from 'react';

import ListScreen from '../../components/listScreen-component';

import { useUser } from '../../contexts/user-context';
import { useClients } from '../../contexts/client-context';


function ClientScreen({ navigation }) {
    const { clients } = useClients();

    return (
        <ListScreen
            data={clients}
            onItemSelected={(item) => { navigation.push('ClientRegister', item) }}
            onNewClick={() => { navigation.push('ClientRegister') }}
            options={{ icon: "person" }}
        />
    );
}

export default ClientScreen;