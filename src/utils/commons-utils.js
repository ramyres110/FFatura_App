import * as Crypto from 'expo-crypto';

export function extractIdFromKey(key) {
    if (key.match(/\@[\w]*\:[\w-]*/g)) {
        return key.split(':')[1];
    }
    return null;
}

export async function cryptograph(phrase) {
    return await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.MD5, phrase);
}

export default function () { }