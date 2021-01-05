import React from 'react';
import { Body, Button, Content, Icon, Left, List, ListItem, Right, Switch, Text, View } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AuthenticationUtils from '../../utils/authenticaton-utils';

import { useUser } from '../../contexts/user-context';

function ExtrasScreen({ navigation }) {
    const { user, setUser } = useUser();

    function logout() {
        AuthenticationUtils.logout();
        setUser(null);
    }

    return (
        <Content>
            <List>
                <ListItem itemHeader first>
                    <Text> Cadastros </Text>
                </ListItem>

                <ListItem icon onPress={() => { navigation.navigate('Incomes2') }}>
                    <Left><MaterialCommunityIcons name="format-list-bulleted-triangle" size={24} /></Left>
                    <Body><Text>Lançamentos</Text></Body>
                </ListItem>

                <ListItem icon onPress={() => { navigation.navigate('Billing2') }}>
                    <Left><MaterialCommunityIcons name="cash-register" size={24} /></Left>
                    <Body><Text>Faturamentos</Text></Body>
                </ListItem>

                <ListItem icon onPress={() => { navigation.navigate('Service') }}>
                    <Left><Icon name="briefcase" style={{ width: 24 }} /></Left>
                    <Body><Text>Serviços</Text></Body>
                </ListItem>

                <ListItem icon onPress={() => { navigation.navigate('Product') }}>
                    <Left><Icon name="cart" style={{ width: 24 }} /></Left>
                    <Body><Text>Produtos</Text></Body>
                </ListItem>

                <ListItem icon onPress={() => { navigation.navigate('Client') }}>
                    <Left><Icon name="people" style={{ width: 24 }}/></Left>
                    <Body><Text>Clientes</Text></Body>
                </ListItem>

                <ListItem icon onPress={() => { navigation.navigate('Contractor') }}>
                    <Left><Icon name="business" style={{ width: 24 }} /></Left>
                    <Body><Text>Contratantes</Text></Body>
                </ListItem>

                <ListItem icon onPress={() => { navigation.navigate('Group') }}>
                    <Left><Icon name="grid" style={{ width: 25 }}/></Left>
                    <Body><Text>Grupos</Text></Body>
                </ListItem>

                <ListItem itemHeader first>
                    <Text>Configurações</Text>
                </ListItem>

                <ListItem icon onPress={() => { navigation.navigate('Goal') }}>
                    <Left><Icon name="trophy-outline" style={{ width: 24 }} /></Left>
                    <Body><Text>Metas</Text></Body>
                </ListItem>

                <ListItem icon onPress={() => { navigation.navigate('Profile') }}>
                    <Left><Icon name="person-circle-outline" style={{ width: 24 }}/></Left>
                    <Body><Text>Perfil</Text></Body>
                </ListItem>

                <ListItem icon onPress={() => { navigation.navigate('Settings') }}>
                    <Left><Icon name="cog" style={{ width: 24 }}/></Left>
                    <Body><Text>Configurações</Text></Body>
                </ListItem>

                <ListItem itemHeader first>
                    <Text>Ajuda</Text>
                </ListItem>

                <ListItem icon onPress={() => { navigation.navigate('Manual') }}>
                    <Left><Icon name="book" style={{ width: 24 }}/></Left>
                    <Body><Text>Manual</Text></Body>
                </ListItem>

                <ListItem icon onPress={() => { navigation.navigate('FrequentAskQuestion') }}>
                    <Left><Icon name="help" style={{ width: 24 }}/></Left>
                    <Body><Text>FAQ</Text></Body>
                </ListItem>

                <ListItem icon onPress={() => { navigation.navigate('Support') }}>
                    <Left><Icon name="headset" style={{ width: 24 }} /></Left>
                    <Body><Text>Suporte</Text></Body>
                </ListItem>

                <ListItem icon onPress={() => { navigation.navigate('About') }}>
                    <Left><Icon name="flash" style={{ width: 24 }}/></Left>
                    <Body><Text>Sobre o App</Text></Body>
                </ListItem>
            </List>

            <View style={{ marginTop: 50, padding: 10 }}>
                <Button block dark style={{ marginTop: 15 }} onPress={logout}>
                    <Icon name="log-out" />
                    <Text>Sair</Text>
                </Button>
                <Text block style={{ textAlign: 'center' }}>1.0.0</Text>
            </View>
        </Content>
    );
}

export default ExtrasScreen;