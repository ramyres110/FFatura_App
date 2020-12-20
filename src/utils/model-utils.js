import StoreUtils from "./storage-utils";

function FactoryModel(prefix) {
    return {
        getAll: () => {
            return StoreUtils.retrieveAll(`@${prefix}:`);
        },

        getById: (uid) => {
            const key = `@${prefix}:${uid}`;
            return StoreUtils.retrieve(key);
        },

        save: (uid, data) => {
            const key = `@${prefix}:${uid}`;
            return StoreUtils.store(key, JSON.stringify(data));
        },

        update: (id, user) => {

        },

        drop: (id) => {

        }
    }
}

export default { FactoryModel }