import React from 'react';
import { Alert } from "react-native";
import { Toast } from "native-base";

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

function ToastWarning(message) {
    Toast.show({
        text: message,
        buttonText: "Ok",
        position: "top",
        type: "warning",
        duration: 3000
    });
}

export default { Success, Information, Question, Warning, Error, ToastWarning };