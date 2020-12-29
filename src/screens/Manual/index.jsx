import React from 'react';

import { Content, H1, H2, H3, Text } from 'native-base';

function ManualScreen() {
    return (
        <Content style={{ padding: 20 }}>
            <H1>Cadastros</H1>
            <H3>Usuário</H3>
            <Text></Text>
            <H3>Grupos</H3>
            <Text></Text>
            <H3>Metas</H3>
            <Text></Text>
            <H3>Lançamentos</H3>
            <Text></Text>
            <H3>Faturamento</H3>
            <Text></Text>
            <H3>Produtos</H3>
            <Text></Text>
            <H3>Serviços</H3>
            <Text></Text>
            <H3>Clientes</H3>
            <Text></Text>
            <H1>Cálculos</H1>
            <H3>Comissão</H3>
            <Text>
                É realizado o cálculo de acordo com os dadas cadastrados.
            </Text>
            <Text>
                Levando em consideração a seguinte precedência:
            </Text>
            <Text>
                (1) Valor da comissão informada no lançamento (caso informada);
            </Text>
            <Text>
                (2) Valor da comissão informada no cadastro do produto/serviço (caso informada);
            </Text>
            <Text>
                (3) Valor da comissão informada no grupo que pertence o produto/serviço (caso informada);
            </Text>
            <Text>
                (4) Valor da comissão informada no cadastro do contratante (caso informada);
            </Text>
            <Text>
                (5) Se nenhum das comissões acima forem informadas será considerado 100%.
            </Text>
            <Text note style={{ textAlign: 'center', marginVertical: 20 }}>Atualizado em 28/12/2020</Text>
        </Content>
    );
}

export default ManualScreen;