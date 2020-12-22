import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';

const Stack = createStackNavigator();

export default function StackApp() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" options={{ title: 'Home', headerShown: false }} component={HomeScreen} />
		</Stack.Navigator>
	);
}