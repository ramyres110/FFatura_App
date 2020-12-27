import React from 'react';

import { Body, Button, Card, CardItem, Content, H1, Text } from 'native-base';

import AuthenticationUtils from '../../utils/authenticaton-utils';

import { useUser } from '../../contexts/user-context';

import { ProgressBar } from 'react-native-paper';
import { Colors } from '../../utils/commons-utils';

function HomeScreen({ navigation }) {
    const { user, setUser } = useUser();

    return (
        <Content style={{ padding: 10 }}>
            <Card>
                <CardItem header>
                    <Text>Meta</Text>
                </CardItem>
                <CardItem>
                    <Body style={{ flex: 1, flexDirection: "column", alignItems: "stretch" }}>
                        <Text>Faturamento</Text>
                        <ProgressBar progress={0.5} color={Colors.yellow} />

                        <Text>Vendas</Text>
                        <ProgressBar progress={0.8} color={Colors.yellow} />

                        <Text>Lucro</Text>
                        <ProgressBar progress={0.2} color={Colors.yellow} />
                    </Body>
                </CardItem>
            </Card>

            <Card>
                <CardItem header>
                    <Text>Total Lançamentos do Dia</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <H1>R$ 0,00</H1>
                    </Body>
                </CardItem>
            </Card>

            <Card>
                <CardItem header>
                    <Text>Total de Lançamentos</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <H1>R$ 0,00</H1>
                    </Body>
                </CardItem>
            </Card>


            <Button large rounded block style={{ marginTop: 25, marginHorizontal: 30, backgroundColor: Colors.orange }}><Text>Adicionar Lançamento</Text></Button>

        </Content>
    );
}

export default HomeScreen;