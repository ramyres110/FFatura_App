import * as Promise from "bluebird";

import StoreUtils from "./storage-utils";
import UuidUtils from "./uuid-utils";
import { extractIdFromKey } from "./commons-utils";

function FactoryModel(prefix) {
    return {
        scheme: `@${prefix}`,

        getAll: async () => {
            const list = await StoreUtils.retrieveAll(`@${prefix}:`);
            const aux = [];
            return Promise.each(list, async (key) => {
                const data = await StoreUtils.retrieve(key);
                const obj = JSON.parse(data);
                aux.push({
                    ...obj,
                    uid: extractIdFromKey(key)
                });
            })
                .then(() => {
                    return aux;
                })
        },

        getById: async (uid) => {
            const key = `@${prefix}:${uid}`;
            const data = await StoreUtils.retrieve(key);
            try {
                const obj = JSON.parse(data);
                return {
                    ...obj,
                    uid: extractIdFromKey(key)
                };
            } catch (error) {
                console.log(err);
                return null;
            }
        },

        save: async (data) => {
            const uid = UuidUtils.uuidv4();
            const key = `@${prefix}:${uid}`;
            const str = (typeof data === 'string') ? data : JSON.stringify(data);
            try {
                await StoreUtils.store(key, str);
            } catch (err) {
                console.log(err);
                return null;
            }
            return {
                ...data,
                uid,
                key,
            }
        },

        update: (id, user) => {

        },

        drop: (id) => {

        }
    }
}

export default { FactoryModel }