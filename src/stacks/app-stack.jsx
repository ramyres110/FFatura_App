import React, { Fragment } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors } from '../utils/commons-utils';

import AppHeader from '../components/appHeader-component';

import BillingProvider from '../contexts/billing-context';
import ClientProvider from '../contexts/client-context';
import IncomeProvider from '../contexts/income-context';
import ProductProvider from '../contexts/product-context';
import ServiceProvider from '../contexts/service-context';

import HomeScreen from '../screens/Home';
import IncomeScreen from '../screens/Income';
import BillingScreen from '../screens/Billing';
import ExtrasScreen from '../screens/Extras';

import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';

const Stack = createStackNavigator();
const Tab2 = createMaterialBottomTabNavigator();

function TabNavigator({ navigation }) {
	return (
		<Fragment>
			<AppHeader navigation={navigation} />
			<Tab2.Navigator
				activeColor="#ffffff"
				barStyle={{ backgroundColor: Colors.darkBlue }}
			>
				<Stack.Screen
					name="Home"
					options={{
						// tabBarBadge: 0,
						tabBarLabel: 'Início',
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons name="chart-donut" color={color} size={26} />
						),
					}}
					component={HomeScreen} />

				<Stack.Screen
					name="Incomes"
					options={{
						tabBarLabel: 'Lançamentos',
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons name="format-list-bulleted-triangle" color={color} size={26} />
						),
					}}
					component={IncomeScreen} />

				<Stack.Screen
					name="Billing"
					options={{
						tabBarLabel: 'Faturamentos',
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons name="cash-register" color={color} size={26} />
						),
					}}
					component={BillingScreen} />

				<Stack.Screen
					name="Extras"
					options={{
						tabBarLabel: 'Extras',
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons name="database" color={color} size={26} />
						),
					}}
					component={ExtrasScreen} />

			</Tab2.Navigator>
		</Fragment>
	);
}


export default function StackApp({ navigation }) {
	return (
		<BillingProvider>
			<ClientProvider>
				<IncomeProvider>
					<ProductProvider>
						<ServiceProvider>
							<Stack.Navigator mode="modal">

								<Stack.Screen name="Main" options={{ headerShown: false }} component={TabNavigator} />

								<Stack.Screen name="Profile" options={{ title: "Perfil" }} component={ProfileScreen} />
								<Stack.Screen name="Settings" options={{ title: 'Configurações' }} component={SettingsScreen} />

							</Stack.Navigator>
						</ServiceProvider>
					</ProductProvider>
				</IncomeProvider>
			</ClientProvider>
		</BillingProvider>
	);
}
