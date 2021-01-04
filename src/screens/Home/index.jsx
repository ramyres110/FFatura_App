import React from 'react';

import { Body, Button, Card, CardItem, Content, H1, Text } from 'native-base';
import { ProgressBar } from 'react-native-paper';

import { Colors } from '../../utils/commons-utils';
import { useGoal } from '../../contexts/goal-context';

function HomeScreen({ navigation }) {
    const { goals } = useGoal();

    function metaFilter(meta) {
        const dtEnd = new Date(meta.dtEnd);
        const dtInit = new Date(meta.dtInit);
        const today = new Date();
        return (dtInit.getTime() < today.getTime() && dtEnd.getTime() >= today.getTime());
    }

    return (
        <Content style={{ padding: 10 }}>

            <Card>
                <CardItem header>
                    <Text>Meta</Text>
                </CardItem>
                <CardItem>
                    {(goals && goals.length && goals.filter(metaFilter).length) ?
                        goals.map((goal) =>
                            <Body key={goal.uid} style={{ flexDirection: "column", alignItems: "stretch" }}>
                                <Text>{goal.name}</Text>
                                <Text note>Faturamento (R$ {goal.incomes})</Text>
                                <ProgressBar progress={0.5} color={Colors.yellow} />

                                <Text note>Vendas (R$ {goal.sales})</Text>
                                <ProgressBar progress={0.8} color={Colors.yellow} />

                                <Text note>Lucro (R$ {goal.profit})</Text>
                                <ProgressBar progress={0.2} color={Colors.yellow} />
                            </Body>
                        ) : (
                            <Body style={{ flex: 1, flexDirection: "column", alignItems: "stretch" }}>
                                <Text note style={{ textAlign: 'center', }}>Nenhuma meta cadastrada</Text>
                                <Text note style={{ textAlign: 'center', }}>*Cadastre em Extras</Text>
                            </Body>
                        )}
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

            <Button rounded block
                onPress={() => { navigation.push('IncomeRegister') }}
                style={{ marginTop: 25, marginHorizontal: 30, backgroundColor: Colors.orange }}
            >
                <Text>Adicionar Lançamento</Text>
            </Button>

        </Content>
    );
}

export default HomeScreen;