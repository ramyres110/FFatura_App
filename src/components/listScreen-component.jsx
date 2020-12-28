import React, { Fragment } from 'react';
import { Body, Button, Icon, Left, List, ListItem, Right, ScrollableTab, Tab, Tabs, Text } from 'native-base';
import { Colors } from '../utils/commons-utils';

// import { Container } from './styles';

function ListScreen({ data, onItemSelected, onNewClick, options }) {

    return (
        <Fragment>
            <List style={{ paddingTop: 15 }}>
                <ListItem icon onPress={() => { }}>
                    <Left icon >
                        <Icon name="briefcase" />
                    </Left>
                    <Body >
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

            <Button activeOpacity primary rounded style={{ position: 'absolute', bottom: 5, right: 5, backgroundColor: Colors.orange }} onPress={() => { console.log('--'); }}>
                <Icon name="add" />
                <Text>Adicionar</Text>
            </Button>
        </Fragment>
    );
}

export default ListScreen;