import React from 'react';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Badge } from 'native-base';

import AuthenticationUtils from '../../utils/authenticaton-utils';

import { useUser } from '../../contexts/user-context';

function HomeScreen() {
    const { user, setUser } = useUser();

    function logout() {
        AuthenticationUtils.logout();
        setUser(null);
    }

    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent><Icon name='menu' /></Button>
                </Left>
                <Body>
                    <Title>{user.name}</Title>
                </Body>
                <Right>
                    <Button hasText transparent onPress={logout}>
                        <Text>Sair</Text>
                    </Button>
                </Right>
            </Header>
            <Content>
                <Text>This is Content Section</Text>
            </Content>
            <Footer>
                <FooterTab>
                    <Button badge vertical>
                        <Badge><Text>2</Text></Badge>
                        <Icon name="apps" />
                        <Text>Apps</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="camera" />
                        <Text>Camera</Text>
                    </Button>
                    <Button active badge vertical>
                        <Badge ><Text>51</Text></Badge>
                        <Icon active name="navigate" />
                        <Text>Navigate</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="person" />
                        <Text>Contact</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
}

export default HomeScreen;