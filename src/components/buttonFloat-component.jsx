import React from 'react';

import { Button, Icon, Text } from "native-base";

import { Colors } from '../utils/commons-utils';

const ButtonFloat = ({ color, onPress, icon, label }) => {
    const colorBtn = color || Colors.orange;
    const iconBtn = icon || "add";
    const labelBtn = label || "Adicionar";

    return (
        <Button activeOpacity primary rounded style={{ position: "absolute", bottom: 5, right: 5, backgroundColor: colorBtn }} onPress={onPress}>
            <Icon name={iconBtn} />
            <Text>{labelBtn}</Text>
        </Button>
    );
}

export default ButtonFloat;