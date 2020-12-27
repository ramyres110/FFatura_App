import React, { Fragment } from 'react';

import { Body, Button, Icon, Left, List, ListItem, Right, ScrollableTab, Tab, Tabs, Text } from 'native-base';

import AuthenticationUtils from '../../utils/authenticaton-utils';

import { useUser } from '../../contexts/user-context';

function IncomeScreen() {
    const { user, setUser } = useUser();

    function logout() {
        AuthenticationUtils.logout();
        setUser(null);
    }

    return (
        <Fragment>
            <Tabs renderTabBar={() => <ScrollableTab />}>
                <Tab heading="Dez 2020">
                    <List>
                        <ListItem itemDivider>
                            <Text>23/12/2020</Text>
                        </ListItem>
                        <ListItem icon onPress={() => { }}>
                            <Left icon>
                                <Icon name="briefcase" />
                            </Left>
                            <Body>
                                <Text>Vacinação</Text>
                                <Text note>Total: R$ 50,00 Perc: 30% Ganho: R$ 15,00 </Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem icon onPress={() => { }}>
                            <Left icon>
                                <Icon name="cart" />
                            </Left>
                            <Body>
                                <Text>Medicamento</Text>
                                <Text note>Total: R$ 40,00 Perc: 5% Ganho: R$ 2,00 </Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>
                </Tab>
                <Tab heading="Nov 2020">
                    <Text>Tab2</Text>
                </Tab>
                <Tab heading="Out 2020">
                    <Text>Tab3</Text>
                </Tab>
            </Tabs>
            <Button activeOpacity primary rounded style={{ position: 'absolute', bottom: 5, right: 5 }} onPress={() => { console.log('--'); }}>
                <Icon name="add" />
                <Text>Adicionar</Text>
            </Button>
        </Fragment>
    );
}

export default IncomeScreen;