import React from 'react';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Badge, ListItem, Switch } from 'native-base';

import AuthenticationUtils from '../../utils/authenticaton-utils';

import { useUser } from '../../contexts/user-context';

function SettingsScreen() {
	const { user, setUser } = useUser();

	return (
		<Content>
			<ListItem icon>
				<Left>
					<Button style={{ backgroundColor: "#FF9501" }}>
						<Icon active name="airplane" />
					</Button>
				</Left>
				<Body>
					<Text>Airplane Mode</Text>
				</Body>
				<Right>
					<Switch value={false} />
				</Right>
			</ListItem>

			<ListItem icon>
				<Left>
					<Button style={{ backgroundColor: "#007AFF" }}>
						<Icon active name="wifi" />
					</Button>
				</Left>
				<Body>
					<Text>Wi-Fi</Text>
				</Body>
				<Right>
					<Text>GeekyAnts</Text>
					<Icon active name="arrow-forward" />
				</Right>
			</ListItem>

			<ListItem icon>
				<Left>
					<Button style={{ backgroundColor: "#007AFF" }}>
						<Icon active name="bluetooth" />
					</Button>
				</Left>
				<Body>
					<Text>Bluetooth</Text>
				</Body>
				<Right>
					<Text>On</Text>
					<Icon active name="arrow-forward" />
				</Right>
			</ListItem>
		</Content>
	);
}

export default SettingsScreen;