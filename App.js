
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UserProvider, { useUser } from './src/contexts/user-context'

import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import ForgetScreen from './src/screens/Forget';

import HomeScreen from './src/screens/Home';

const Stack = createStackNavigator();

function StackLogin() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" options={{ title: 'Login', headerShown: false }} component={LoginScreen} />
      <Stack.Screen name="Register" options={{ title: 'Cadastro' }} component={RegisterScreen} />
      <Stack.Screen name="Forget" options={{ title: 'Esqueci a senha' }} component={ForgetScreen} />
    </Stack.Navigator>
  );
}

function StackApp() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function StackAuthentication() {
  const { user } = useUser();

  return (
    <NavigationContainer>{(!user) ? <StackLogin /> : <StackApp />}</NavigationContainer>
  );
}

function App() {
  return (
    <UserProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StackAuthentication />
      </SafeAreaView>
    </UserProvider>
  );
}

export default App;