import React from 'react';

import { useGoal } from '../../contexts/goal-context';
import ListScreen from '../../components/listScreen-component';

function GoalScreen({ navigation }) {
    const { goals } = useGoal();

    return (
        <ListScreen
            data={goals}
            screenHandler="GoalRegister"
            navigation={navigation}
        />
    );
}

export default GoalScreen;