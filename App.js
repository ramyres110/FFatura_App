import React, { useState, useEffect } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import AppLoading from 'expo-app-loading';

import { Container } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import UserProvider from './src/contexts/user-context'

import StackAuthentication from './src/stacks/authentication-stack';

function App() {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
			...Ionicons.font,
		})
			.then(() => {
				setReady(true);
			});
	}, []);


	if (!ready) {
		return <AppLoading />
	}

	return (
		<UserProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<Container>
					<StackAuthentication />
				</Container>
			</SafeAreaView>
		</UserProvider>
	);
}

export default App;