import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';

import AuthenticationUtils from '../utils/authenticaton-utils';

import { useUser } from '../contexts/user-context'

import StackLogin from './login-stack';
import StackApp from './app-stack';

export default function StackAuthentication() {
    const [ready, setReady] = useState(false);
    const { user, setUser } = useUser();

    useEffect(() => {
        AuthenticationUtils.getAuthenticatedUser()
            .then((user) => {
                setUser(user);
                setReady(true);
            })
    }, []);

    if (!ready) {
        return <AppLoading />
    }
    return (
        <NavigationContainer style={{ flex: 1 }}>
            {
                (!user) ?
                    <StackLogin /> :
                    <StackApp />
            }
        </NavigationContainer>
    );
}