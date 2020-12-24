import AsyncStorage from '@react-native-async-storage/async-storage';

async function store(key, value) {
    try {
        return await AsyncStorage.setItem(key, value);
    } catch (error) {
        // Error saving data
        return false;
    }
}

async function retrieve(key) {
    try {
        return await AsyncStorage.getItem(key);
    } catch (error) {
        // Error retrieving data
        return null;
    }
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

async function drop(key) {
    try {
        return await AsyncStorage.removeItem(key);
    } catch (error) {
        // Error retrieving data
        return null;
    }
}

export default { store, retrieve, retrieveAll, drop };