import React from 'react';

import { Header, Title, Button, Left, Right, Body, Icon, Text, ActionSheet } from 'native-base';

import AuthenticationUtils from '../utils/authenticaton-utils';
import { Colors } from '../utils/commons-utils';

import { useUser } from '../contexts/user-context';

const BUTTONS = [
    { text: "Sair", icon: "log-out", iconColor: "black" },
    // { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
    // { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
    // { text: "Delete", icon: "trash", iconColor: "#fa213b" },
    { text: "Cancelar", icon: "close", iconColor: "black" }
];

export default function AppHeader({ navigation }) {
    const { user, setUser } = useUser();

    function logout() {
        AuthenticationUtils.logout();
        setUser(null);
    }

    function onPressProfile() {
        navigation.navigate('Profile');
    }

    function onPressMore(params) {
        ActionSheet.show(
            {
                options: BUTTONS,
                title: "Mais Opções"
            },
            (buttonIndex) => {
                switch (buttonIndex) {
                    case 0:
                        logout();
                        break;
                    default:
                        break;
                }
            }
        );
    }

    return (
        <Header style={{ backgroundColor: Colors.darkBlue }}>
            {/* <Left>
                <Button transparent><Icon name='menu' /></Button>
            </Left> */}
            <Body>
                <Title style={{ color: "white" }}>Olá, {user.name.split(' ')[0]}</Title>
            </Body>
            <Right>
                <Button transparent onPress={onPressProfile}>
                    <Icon name='person-circle-outline' style={{ color: "white" }} />
                </Button>
                <Button transparent onPress={onPressMore}>
                    <Icon name='ellipsis-vertical' style={{ color: "white" }} />
                </Button>
            </Right>
        </Header>
    )
}