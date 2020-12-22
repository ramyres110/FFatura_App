import React from 'react';
import { Alert } from "react-native";

import * as App from '../../app.json';

function AbstractAlert(message, buttons, options) {
    const title = App.expo.name;
    buttons = buttons || [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
    ];
    options = { cancelable: true, ...options };
    return Alert.alert(title, message, buttons, options);
}

function Success(message, buttons, options) {
    return AbstractAlert(message, buttons, options);
}

function Information(message, buttons, options) {
    return AbstractAlert(message, buttons, options);
}

function Warning(message, buttons, options) {
    return AbstractAlert(message, buttons, options);
}

function Error(message, buttons, options) {
    return AbstractAlert(message, buttons, options);
}

function Question(message, buttons, options) {
    return AbstractAlert(message, buttons, options);
}

export default { Success, Information, Question, Warning, Error };