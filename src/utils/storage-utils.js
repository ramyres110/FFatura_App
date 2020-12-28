import AsyncStorage from '@react-native-async-storage/async-storage';

async function store(key, value) {
    return await AsyncStorage.setItem(key, value);
}

async function retrieve(key) {
    return await AsyncStorage.getItem(key);
}

async function retrieveAll(prefix) {
    let keys = []
    try {
        keys = await AsyncStorage.getAllKeys();
    } catch (e) {
        return null
    }
    return keys.filter(key => key.indexOf(prefix) >= 0);
}

async function update(key, data) {
    return await AsyncStorage.setItem(key, data);
}

async function drop(key) {
    return await AsyncStorage.removeItem(key);
}

export default { store, retrieve, retrieveAll, drop, update };