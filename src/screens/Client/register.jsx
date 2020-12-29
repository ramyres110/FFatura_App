import React from 'react';
import { Button, Text, View } from 'native-base';

import ClientModel from "../../models/client-model";

import { useClients } from "../../contexts/client-context";

const ClientRegisterScreen = ({ route, navigation }) => {
    const { clients, setClients } = useClients();

    async function salvar() {
        const newClient = {
            "name": "Socrates Aristoteles",
            "document": "123456789",
            "email": "aristoteles@gmail.com",
            "phone": "999999",
            "address": "",
        }
        const saved = await ClientModel.save(newClient);
        setClients(clients.concat(saved));
        navigation.goBack();
    }

    const clientEdit = route.params;
    return (
        <View>
            {(!clientEdit) ?
                <View>
                    <Text>Cadastro de Cliente</Text>
                    <Button onPress={salvar}>
                        <Text>Salvar</Text>
                    </Button>
                </View> :
                <Text>Editando</Text>
            }
        </View>
    );
}

export default ClientRegisterScreen;