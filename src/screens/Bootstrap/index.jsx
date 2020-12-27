import React, { Fragment } from 'react';

import { ScrollableTab, Tab, Tabs, Text } from 'native-base';

import { useUser } from '../../contexts/user-context';

function BootstrapScreen() {
    const { user } = useUser();

    return (
        <Fragment>

        </Fragment>
    );
}

export default BootstrapScreen;