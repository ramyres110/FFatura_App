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

                <ListItem icon onPress={() => { navigation.navigate('Incomes') }}>
                    <Left><MaterialCommunityIcons name="format-list-bulleted-triangle" size={26} /></Left>
                    <Body><Text>Lançamentos</Text></Body>
                </ListItem>

                <ListItem icon onPress={() => { navigation.navigate('Billing') }}>
                    <Left><MaterialCommunityIcons name="cash-register" size={26} /></Left>
                    <Body><Text>Faturamentos</Text></Body>
                </ListItem>

                <ListItem icon onPress={() => { }}>
                    <Left><MaterialCommunityIcons name="briefcase" size={26} /></Left>
                    <Body><Text>Serviços</Text></Body>
                </ListItem>

                <ListItem icon onPress={() => { }}>
                    <Left><Icon name="cart" /></Left>
                    <Body><Text>Produtos</Text></Body>
                </ListItem>

                <ListItem icon onPress={() => { }}>
                    <Left><Icon name="people-circle-outline" /></Left>
                    <Body><Text>Clientes</Text></Body>
                </ListItem>

                <ListItem icon onPress={() => { }}>
                    <Left><Icon name="business" /></Left>
                    <Body><Text>Contratantes</Text></Body>
                </ListItem>

                <ListItem icon onPress={() => { }}>
                    <Left><Icon name="grid" /></Left>
                    <Body><Text>Grupos</Text></Body>
                </ListItem>

                <ListItem itemHeader first>
                    <Text>Configurações</Text>
                </ListItem>

                <ListItem icon onPress={() => { navigation.navigate('Profile') }}>
                    <Left><Icon name="person-circle-outline" /></Left>
                    <Body><Text>Perfil</Text></Body>
                </ListItem>

                <ListItem icon onPress={() => { navigation.navigate('Settings') }}>
                    <Left><Icon name="cog" /></Left>
                    <Body><Text>Configurações</Text></Body>
                </ListItem>

                <ListItem itemHeader first>
                    <Text>Ajuda</Text>
                </ListItem>

                <ListItem icon onPress={() => { navigation.navigate('Settings') }}>
                    <Left><Icon name="book" /></Left>
                    <Body><Text>Manual</Text></Body>
                </ListItem>

                <ListItem icon onPress={() => { navigation.navigate('Settings') }}>
                    <Left><Icon name="help" /></Left>
                    <Body><Text>FAQ</Text></Body>
                </ListItem>

                <ListItem icon onPress={() => { navigation.navigate('Settings') }}>
                    <Left><Icon name="call" /></Left>
                    <Body><Text>Suporte</Text></Body>
                </ListItem>

                <ListItem icon onPress={() => { navigation.navigate('Settings') }}>
                    <Left><Icon name="flash" /></Left>
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