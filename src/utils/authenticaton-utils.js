import UserModel from "../models/user-model";
import storageUtils from "./storage-utils";

async function getAuthenticatedUser() {
    const currentUserId = await storageUtils.retrieve('@currentuser');
    if (!currentUserId) {
        return null;
    }
    const user = await UserModel.getById(currentUserId);
    if (!user) {
        return null;
    }
    return user;
}

async function setAuthenticatedUser(userId) {
    const resp = await storageUtils.store('@currentuser', userId || '');
    return resp;
}

async function logout() {
    return setAuthenticatedUser(null);
}

export default { getAuthenticatedUser, setAuthenticatedUser, logout }