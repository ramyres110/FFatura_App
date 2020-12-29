import React from 'react';
import { Text } from 'native-base';

import ListScreen from '../../components/listScreen-component';

import { useGroup } from '../../contexts/group-context';

function GroupScreen({ navigation }) {
    const { groups } = useGroup();

    return (
        <ListScreen
            data={groups}
            screenHandler="GroupRegister"
            options={{ icon: "grid" }}
            navigation={navigation}
            extraRightComponent={(item) => <Text>{`${item.commission} % `}</Text>}
        />
    );
}

export default GroupScreen;