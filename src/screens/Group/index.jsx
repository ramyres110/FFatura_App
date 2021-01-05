import React from 'react';
import { Text } from 'native-base';

import ListScreen from '../../components/listScreen-component';

import { useGroups } from '../../contexts/group-context';

function GroupScreen({ navigation }) {
    const { groups } = useGroups();

    return (
        <ListScreen
            data={groups}
            screenHandler="GroupRegister"
            navigation={navigation}
            options={{ icon: "grid" }}
            extraRightComponent={(item) => <Text>{`${item.commission} % `}</Text>}
        />
    );
}

export default GroupScreen;