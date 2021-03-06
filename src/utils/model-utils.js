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
            const prepared = {
                ...data,
                uid,
                createdAt: new Date(),
                changedAt: new Date(),
            }
            const str = (typeof data === 'string') ? data : JSON.stringify(prepared);
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

        update: async (uid, data) => {
            if (!uid) {
                return null;
            }
            const key = `@${prefix}:${uid}`;
            const old = await StoreUtils.retrieve(key)
            const prepared = {
                ...JSON.parse(old),
                ...data,
                uid,
                changedAt: new Date(),
            }
            const str = (typeof data === 'string') ? data : JSON.stringify(prepared);
            try {
                await StoreUtils.update(key, str);
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

        drop: async (uid) => {
            const key = `@${prefix}:${uid}`;
            return StoreUtils.drop(key);
        }
    }
}

export default { FactoryModel }