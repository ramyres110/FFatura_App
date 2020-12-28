import React, { Fragment } from 'react';

import { ScrollableTab, Tab, Tabs, Text } from 'native-base';

import { useUser } from '../../contexts/user-context';
import ListScreen from '../../components/listScreen-component';

function ServiceScreen() {
    const { user } = useUser();

    return (
        <Fragment>
            <ListScreen />
        </Fragment>
    );
}

export default ServiceScreen;