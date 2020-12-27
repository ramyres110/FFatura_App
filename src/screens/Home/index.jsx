import React from 'react';

import { Content, Text } from 'native-base';

import AuthenticationUtils from '../../utils/authenticaton-utils';

import { useUser } from '../../contexts/user-context';

function HomeScreen({ navigation }) {
    const { user, setUser } = useUser();

    return (
        <Content>
            <Text>Home</Text>
        </Content>
    );
}

export default HomeScreen;