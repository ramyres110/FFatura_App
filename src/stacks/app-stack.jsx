import React, { Fragment } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors } from '../utils/commons-utils';

import AppHeader from '../components/appHeader-component';

import GroupProvider from '../contexts/group-context';
import BillingProvider from '../contexts/billing-context';
import ClientProvider from '../contexts/client-context';
import IncomeProvider from '../contexts/income-context';
import ProductProvider from '../contexts/product-context';
import ServiceProvider from '../contexts/service-context';
import ContractorProvider from '../contexts/contractor-context';
import GoalProvider from '../contexts/goal-context';

import BootstrapScreen from '../screens/Bootstrap';

import HomeScreen from '../screens/Home';
import IncomeScreen from '../screens/Income';
import BillingScreen from '../screens/Billing';
import ExtrasScreen from '../screens/Extras';

import ServiceScreen from '../screens/Service';
import ProductScreen from '../screens/Product';
import ClientScreen from '../screens/Client';
import ContractorScreen from '../screens/Contractor';
import GroupScreen from '../screens/Group';

import GoalScreen from '../screens/Goal';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';

import ManualScreen from '../screens/Manual';
import FrequentAskQuestionScreen from '../screens/FrequentAskQuestion';
import SupportScreen from '../screens/Support';
import AboutScreen from '../screens/About';
import ClientRegisterScreen from '../screens/Client/register';
import GroupRegisterScreen from '../screens/Group/register';
import GoalRegisterScreen from '../screens/Goal/register';
import IncomeRegisterScreen from '../screens/Income/register';
import ProductRegisterScreen from '../screens/Product/register';

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

function AppNavigator() {

	return (
		<Stack.Navigator
			mode="modal"
			initialRouteName="Main"
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.darkBlue,
				},
				headerTintColor: '#fff',
			}}
		>
			{/* TODO: Criar Bootrastap */}
			<Stack.Screen name="Bootstrap" options={{ headerShown: false }} component={BootstrapScreen} />

			{/*  */}
			<Stack.Screen name="Main" options={{ headerShown: false }} component={TabNavigator} />

			{/*  */}
			<Stack.Screen name="Billing2" options={{ title: 'Faturamento' }} component={IncomeScreen} />
			<Stack.Screen name="Incomes2" options={{ title: 'Lançamentos' }} component={BillingScreen} />
			<Stack.Screen name="Service" options={{ title: 'Serviços' }} component={ServiceScreen} />
			<Stack.Screen name="Product" options={{ title: 'Produtos' }} component={ProductScreen} />
			<Stack.Screen name="Client" options={{ title: 'Clientes' }} component={ClientScreen} />
			<Stack.Screen name="Contractor" options={{ title: 'Contratantes' }} component={ContractorScreen} />
			<Stack.Screen name="Group" options={{ title: 'Grupos' }} component={GroupScreen} />

			<Stack.Screen name="Goal" options={{ title: 'Metas' }} component={GoalScreen} />
			<Stack.Screen name="Profile" options={{ title: "Perfil" }} component={ProfileScreen} />
			<Stack.Screen name="Settings" options={{ title: 'Configurações' }} component={SettingsScreen} />

			<Stack.Screen name="Manual" options={{ title: 'Manual' }} component={ManualScreen} />
			<Stack.Screen name="FrequentAskQuestion" options={{ title: 'FAQ' }} component={FrequentAskQuestionScreen} />
			<Stack.Screen name="Support" options={{ title: 'Suporte' }} component={SupportScreen} />
			<Stack.Screen name="About" options={{ title: 'Sobre o App' }} component={AboutScreen} />

			{/*  */}
			<Stack.Screen name="IncomeRegister" options={{ title: 'Adicionar Lançamento' }} component={IncomeRegisterScreen} />
			<Stack.Screen name="ClientRegister" options={{ title: 'Cadastro de Cliente' }} component={ClientRegisterScreen} />
			<Stack.Screen name="GroupRegister" options={{ title: 'Cadastro de Grupo' }} component={GroupRegisterScreen} />
			<Stack.Screen name="GoalRegister" options={{ title: 'Cadastro de Meta' }} component={GoalRegisterScreen} />
			<Stack.Screen name="ProductRegister" options={{ title: 'Cadastro de Produto '}} component={ProductRegisterScreen} />
		</Stack.Navigator>
	);
}

export default function StackApp() {
	return (
		<GroupProvider>
			<BillingProvider>
				<ClientProvider>
					<IncomeProvider>
						<ProductProvider>
							<ServiceProvider>
								<ContractorProvider>
									<GoalProvider>
										<AppNavigator />
									</GoalProvider>
								</ContractorProvider>
							</ServiceProvider>
						</ProductProvider>
					</IncomeProvider>
				</ClientProvider>
			</BillingProvider>
		</GroupProvider>
	);
}
