# Faturamento Pessoa Física

App para pessoas físicas realizarem seus faturamentos de acordocomum periodo definido: diário, semanal, mensal, semestral, etc...

## Objetivo

Facilitar a vida de quem trabalha com o regime de comissões, de modo a garantir que haja segurança e confiança em seus faturamentos.

## Público Alvo

Funcionários Comissionados, que trabalhem com vendas ou prestação de serviços.

Ex:
- Plantonistas
- Vendedores
- Prestadores de Serviços
- Tercerizados de Serviços Gerais (Jardineiro, Limpador de Piscina, Etc)

## Oponentes
- <https://play.google.com/store/apps/details?id=com.invoiceapp>
- <https://play.google.com/store/apps/details?id=br.com.contabileasy>
- <https://play.google.com/store/apps/details?id=com.aadhk.woinvoice>
- <https://play.google.com/store/apps/details?id=com.intuit.quickbooks>

## Analises
### Faturamento
- O faturamento é a soma de todos os valores obtidos com as vendas de produtos e/ou serviços na *empresa em um determinado período.
- Faturamento Bruto x Faturamento Líquido
- Custo existem em um negócio:
    1. Custos Fixos
    1. Custos Variáveis
    1. Despesas Fixas
    1. Despesas Variáveis
- Autônomo x Contratado

### SWOT (FOFA)
- Ambiente Interno
    - Marketing
        - Forças
            - Compartilhamento via internet utilizando os SEOs e Propagandas Pagas Direcionadas  
        - Fraquezas
            - Rede de contato dos colaboradores é fraca em relação ao público alvo, postar em nossas redes sociais não será efetivo
    - Financeiro
        - Forças 
            - Custo para produção será relativamente baixo, de inicio utilizaremos nossos equipamentos
            - Já foi pago o Google Play
        - Fraquezas
            - Não há investimento inicial, logo teremos que arcar com possíveis custos, como: infraestrutura, licenças e propaganda. 
    - Produção
        - Forças  
            - Desenvolvedores com experiência em codificação
        - Fraquezas
            - Inesperiência em desenvolvimento mobile
            - Tempo para desenvolvimento, por ser um projeto paralelo
    - Gestão
        - Forças
            - Com poucas pessoas fica fácil a gestão, a mesma se torna cara-a-cara.  
        - Fraquezas
            - Não há um responsável direto
            - Não há controle de tempo ou de produção
- Ambiente Externo
    - Forças Macroambientais (~Analise PESTAL)
        - Demográficas
            - Oportunidades
                - Estará disponível em todo território Brasileiro
            - Ameaças
                - Regiões com dificuldades de acesso a internet
        - Econômicas
            - Oportunidades
                - Cobrança de acordo com o faturamento do usuário
            - Ameaças
                - Muitos usuários com baixo faturamento que custam e não rendem
        - Tecnológicas
            - Oportunidades
                - Quase todas as pessoas utilizam smartphone
            - Ameaças
                - Smartphones obsoletos ou antigos
        - Regulatórias
            - Oportunidades
                - *Ver legislação de Apps (Marco Civil da Internet, LGPD, etc)
            - Ameaças
                - Estar em inconformidade com as Leis 
        - Políticas
            - Oportunidades
                - Alteração nos contratos trabalhistas
            - Ameaças
                - Alteração nos contratos trabalhistas
        - Culturais
            - Oportunidades
                - Todas as pessoas estão imersas em um mundo tecnológico com aceitação e crescimento acelerado da transformação digital.
            - Ameaças
                - Não utilização por desconfiança, protecionismo ou conservadorismo. 
    - Agentes Microambientais
        - Concorrentes
            - Oportunidades
                - Poucos concorrentes encontrados, para não dizer nenhum, com a ideiade faturamento. 
            - Ameaças
                - Empresas grandes e consolidadas produzirem um app concorrente com maior investimento em marketing.
        - Clientes
            - Oportunidades
                - Funcionários comissionados, tercerizados MEIs e plantonistas estão em crescente demanda no mercado.
                - Varias categorias
                    - Enfermeiros
                    - Veterinários
                    - Garçons
                    - etc...
            - Ameaças
                - Cliente com baixo faturamento ou nenhum, ou não registrando no sistema.
        - Distribuidores
            - Oportunidades
                - GooglePlay pago
            - Ameaças
                - Banimento por infligir alguma regra
        - Fornecedores
            - Oportunidades
                - Somos nos mesmos
            - Ameaças
                - Tempo e força de produção.

### PMCanvas


### Mapa de Navegabilidade
- Login
    - Registro
        - Nome
        - Documento
        - Email
        - Telefone
        - Endereço
        - Profissão
        - Escolaridade
        - Autônomo x Contratado
    - Esqueceu a senha
        - Email
        - Telefone
    - Bootstrap (Tutorial e Configurações Iniciais)
    - App
        - Dashboard
            - Total do Dia
            - Total do Mês
            - Ultimos lançamentos
            - [Lançar]
            - [Fechar Faturamento]
        - *Menu
            - Perfil
                - Uso e Limites
                - Alterar Dados
                - Alterar Foto
                - Alterar Senha
                - *Conta
            - Lançar
                - Venda
                    - Produto
                        - Grupo
                        - Quantidade
                        - Preço
                        - Comissão
                        - Desconto
                    - Contratante
                    - Cliente
                    - Pagamento
                        - Tipo de Pagamento (A vista, Parcelado,...)
                        - Pagamento Com (Dinheiro, Cartão de Crédito, Cartão de Débito, Etc)
                        - *Quantidade de parcelas
                    - Data e Hora
                    - Obs
                    - *Leitor de Código de Barras
                    - *Leitor de QrCode
                    - Anexos
                - Serviço
                    - Serviço
                        - Grupo
                        - Quantidade
                        - Preço
                        - Comissão
                        - Desconto
                    - Contratante
                    - Cliente
                    - Pagamento
                        - Tipo de Pagamento (A vista, Parcelado,...)
                        - Pagamento Com (Dinheiro, Cartão de Crédito, Cartão de Débito, Etc)
                        - *Quantidade de parcelas
                        - Juros
                    - Data e Hora
                    - Obs
                    - Anexos
            - Salário
                - Valor do Fixo
            - Lançamentos
                - Periodo a Periodo
                - *Vendas e suas Comissões
                - *Serviços e suas Comissões
            - Faturamentos
                - Periodo a Periodo
                - *Por Contratante
                - Fixo + Comissões
                - Compartilhar
                    - PDF
                    - PNG
                    - TXT
            - Clientes
                - Nome
                - Documento
                - Email
                - Telefone
                - Endereço
            - Produtos
                - Grupo
                    - Comissão
                - Produto
                    - Código
                    - Grupo
                    - Descrição
                    - Marca
                    - Unidade (UN, CX, KG,...)
                    - Preço
                    - Máx Desconto
                    - Pagamentos
                        - Tipo de Pagamento (A vista, Parcelado,...)
                        - Pagamento Com (Dinheiro, Cartão de Crédito, Cartão de Débito, Etc)
                        - Juros
                        - Comissão
                    - CST
                    - NCM
                    - Código de Barras
                    - QRCode
            - Serviços
                - Grupo
                    - Comissão
                - Serviço
                    - Código
                    - Grupo
                    - Descrição
                    - Preço
                    - Pagamentos
                        - Tipo de Pagamento (A vista, Parcelado,...)
                        - Pagamento Com (Dinheiro, Cartão de Crédito, Cartão de Débito, Etc)
                        - Comissão
            - Metas
                - *Faturamento
                - *Lucro
                - *Qtd Vendas
            - Aquivos
                - Anexos
            - Configurações
                - Contratante
                    - Nome
                    - Documento
                    - Email
                    - Telefone
                    - Endereço
                    - Contratação (Autônomo x Contratado)
                    - Regime (Apenas Comissão x Salario Fixo + Bonu x Misto*)
                    - Salário Fixo
                    - Carga Horária
                    - Dias da Semana
                        - Entrada
                        - Saída
                        - Intervalo
                    - Contrato
                - Periódicidade do Faturamento (diário, semanal, quinzenal, etc...)
                - Dia de fechamento
                - Tipo de Pagamento (A vista, Parcelado,...)
                - Pagamento Com (Dinheiro, Cartão de Crédito, Cartão de Débito, Etc)
                - Contratos 
                    - Template
            - Conta (Pagamento para o App)
                - Pagamentos
                - Limites
                - **Alterar Plano

### MVP (Minimum Viable Product - Produto Mínimo Viável)


## Empresa
Lançando um produto, deve ser criado uma empresa para gerir-lo e mantê-lo.

Tarefas empresariais:
- [ ] Definir Missão, Visão e Valores
- [ ] Definir Objetivos Estratégicos
- [ ] Definir Objetivos Tátivos (Metas)
- [ ] Definir Objetivos Operacionais (Planos de Ação)
- [ ] Elaborar Orçamento Empresarial


## Ferramentas
- Expo <https://docs.expo.io/>
- React Navigation <https://reactnavigation.org/>
- Native Base <https://docs.nativebase.io/>
- Ionicons <https://ionicons.com/>
- Material Icon <https://cdn.materialdesignicons.com/5.4.55/>
- AsyncStorage <https://react-native-async-storage.github.io/async-storage/>
- Regex <https://regexr.com/>


## Assets
1. <https://www.iconfinder.com/icons/379341/graph_money_icon>


## Referências
1. <https://www.heflo.com/pt-br/swot/o-que-e-analise-swot/>
1. <https://www.treasy.com.br/blog/analise-pest/>
1. <https://www.startse.com/noticia/startups/mvp>
1. <https://www.infovarejo.com.br/vocabulario-fiscal-varejo/>
1. <https://www.infovarejo.com.br/3-dicas-cadastro-de-produtos/>
1. <https://www.infovarejo.com.br/o-que-e-cest/>
1. <https://pt.wikipedia.org/wiki/Teoria_cl%C3%A1ssica_da_administra%C3%A7%C3%A3o>
1. <https://blog.contaazul.com/faturamento>
1. <https://blog.contaazul.com/aprenda-a-gerenciar-a-comissao-de-vendedores-da-sua-empresa>


## Anotações
?? Analise P.E.S.T
?? 5 Forças de Porter

Relacionar os items da matriz SWOT
- 0: Sem Relação
- 1: Relação Fraca
- 2: Relação Moderada
- 3: Relação Forte

SWOT Ações Estratégicas
+ Crescimento
* Matriz de Desenvolvimento = Oportunidade x Forças
* Matriz de Restrições      = Oportunidade x Fraquezas 
* Matriz de Sobrevivência   = Ameaças x Forças
* Matriz de Riscos          = Ameaças x Fraquezas
+ Sustentabilidade
* Matriz de Fortalecimento  = Forças x Oportunidades
* Matriz de Proteção        = Forças x Ameaças

Os passos para criar um produto mínimo viável:
- 1º Passo: ter uma boa equipe
- 2º Passo: entender o cliente e definir a dor
- 3º Passo: fazer um script
- 4º Passo: pôr em prática de forma manual
- 5º Passo: Melhorar, melhorar e melhorar!

?? TAKT
- Handoff Network

?? SIPOC

?? PPM Project & Portifolio Manage