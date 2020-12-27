import * as Crypto from 'expo-crypto';
import { generate } from '../extras/third-party-libraries/generate-password';

export function extractIdFromKey(key) {
    if (key.match(/\@[\w]*\:[\w-]*/g)) {
        return key.split(':')[1];
    }
    return null;
}

export async function cryptograph(phrase) {
    return await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.MD5, phrase);
}

export function generatePass(length) {
    if (!length) {
        length = 5;
    }
    return generate({
        length: length,
        lowercase: false,
        numbers: false,
    });
}

export const Colors = {
    yellow: "#fabc3d",
    orange: "#f37b11",
    darkBlue: "#0484ab",
    blue: "#059bbf",
    lightBlue: "#21b2d1",
}

export default function () { }