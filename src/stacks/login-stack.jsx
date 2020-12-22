import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import ForgetScreen from '../screens/Forget';

const Stack = createStackNavigator();

export default function StackLogin() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" options={{ title: 'Login', headerShown: false }} component={LoginScreen} />
            <Stack.Screen name="Register" options={{ title: 'Cadastro' }} component={RegisterScreen} />
            <Stack.Screen name="Forget" options={{ title: 'Esqueci a senha' }} component={ForgetScreen} />
        </Stack.Navigator>
    );
}