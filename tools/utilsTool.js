import InternetUtils from "../src/utils/internet-utils";

import UUIDUtils from '../src/utils/uuid-utils';

async function checkConn() {
    console.log('@ Connected', await InternetUtils.CheckConnectivity());
}

async function makeRequest() {
    const resp = await InternetUtils.Request('GET', 'https://reactnative.dev/movies.json');
    console.log('@ Request', resp);
}

async function getUUID() {
    const id = UUIDUtils.uuidv4();
    console.log('@ UUID', id);
}

checkConn();
makeRequest();
getUUID();