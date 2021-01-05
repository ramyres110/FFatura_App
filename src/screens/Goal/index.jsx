import React from 'react';

import { Text } from 'native-base';

import { useGoals } from '../../contexts/goal-context';

import ListScreen from '../../components/listScreen-component';
import { dateToDateBr } from '../../utils/commons-utils';

function GoalScreen({ navigation }) {
    const { goals } = useGoals();

    return (
        <ListScreen
            data={goals}
            screenHandler="GoalRegister"
            navigation={navigation}
            options={{ icon: "trophy-outline" }}
            extraRightComponent={(item) => <Text>Até {dateToDateBr(item.dtEnd)}</Text>}
        />
    );
}

export default GoalScreen;