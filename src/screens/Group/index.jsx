import React, { Fragment } from 'react';

import { ScrollableTab, Tab, Tabs, Text } from 'native-base';

import { useGroup } from '../../contexts/group-context';
import ListScreen from '../../components/listScreen-component';

function GroupScreen() {
    const { groups, setGroups } = useGroup();

    return (
        <ListScreen data={groups} options={{icon:"grid"}}/>
    );
}

export default GroupScreen;