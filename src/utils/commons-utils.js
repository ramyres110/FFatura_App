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

export function dateToDateBr(date) {
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    const d = date.toJSON();
    let [year, month, day] = d.split('T')[0].split('-');
    return `${day}/${month}/${year}`;
}

export function dateBrToDate(brdate) {
    if (!brdate.match(/\d{2}\/\d{2}\/\d{4}/g)) {
        return null;
    }
    let [dia, mes, ano] = brdate.split('/');
    let d = new Date();
    d.setDate(dia);
    d.setMonth(parseInt(mes) - 1);
    d.setFullYear(ano);
    return d;
}

export default function () { }