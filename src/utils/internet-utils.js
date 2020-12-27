import React from "react";
import NetInfo from '@react-native-community/netinfo';

const METHODS = [
    'DELETE',
    'GET',
    'HEAD',
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
];

const STATUS_CODE = {
    '100': 'Continue',
    '200': 'OK',
    '201': 'Created',
    '202': 'Accepted',
    '204': 'No Content',
    '301': 'Moved Permanently',
    '302': 'Found',
    '400': 'Bad Request',
    '401': 'Unauthorized',
    '402': 'Payment Required',
    '403': 'Forbidden',
    '404': 'Not Found',
    '405': 'Method Not Allowed',
    '406': 'Not Acceptable',
    '407': 'Proxy Authentication Required',
    '408': 'Request Timeout',
    '409': 'Conflict',
    '500': 'Internal Server Error',
    '501': 'Not Implemented',
    '502': 'Bad Gateway',
    '503': 'Service Unavailable',
    '504': 'Gateway Timeout',
}

async function CheckConnectivity() {
    const { type, isConnected } = await NetInfo.fetch();
    return { type, isConnected };
};

async function Request(method, url, headers, body) {
    if (!(METHODS.some(m => m === method)) && !url) {
        url = method;
        method = 'GET';
    }

    const options = {
        method: method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...headers
        },
        body: JSON.stringify(body),
    }

    try {
        const response = await fetch(url, options);
        const responseJson = await response.json();
        return responseJson;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export default { CheckConnectivity, Request, METHODS, STATUS_CODE };