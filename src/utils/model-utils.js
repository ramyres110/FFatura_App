import StoreUtils from "./storage-utils";
import UuidUtils from "./uuid-utils";

function FactoryModel(prefix) {
    return {
        scheme: `@${prefix}`,
        
        getAll: () => {
            return StoreUtils.retrieveAll(`@${prefix}:`);
        },

        getById: async (uid) => {
            const key = `@${prefix}:${uid}`;
            const data = await StoreUtils.retrieve(key);
            try {
                return JSON.parse(data);
            } catch (error) {
                return data;
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