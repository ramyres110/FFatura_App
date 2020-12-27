import ModelUtils from "../utils/model-utils";
import { cryptograph, generatePass } from "../utils/commons-utils";

const UserModel = ModelUtils.FactoryModel('users');

UserModel.getByEmailAndPass = async (email, pass) => {
    if (!email || !pass) {
        return null;
    }
    const userList = await UserModel.getAll();
    if (!userList.length) {
        return null;
    }
    const cryptPass = await cryptograph(pass);

    const userFound = userList.filter((current) => {
        return (current.email === email && current.password === cryptPass);
    });

    if (!userFound.length) {
        return null;
    }
    if (!userFound.length > 1) {
        throw new Error('Mais de um usuário com mesmo email e senha');
    }
    return userFound[0];
}

UserModel.getByEmail = async (email) => {
    if (!email) {
        return null;
    }
    const userList = await UserModel.getAll();
    if (!userList.length) {
        return null;
    }
    const userFound = userList.filter((current) => {
        return (current.email === email);
    });
    if (!userFound.length) {
        return null;
    }
    return userFound[0];
}

UserModel.resetPasswordByEmail = async (email) => {
    if (!email) {
        return null;
    }
    const user = await UserModel.getByEmail(email);
    if (!user) {
        return null;
    }
    const newPass = generatePass();
    return newPass;
}

export default UserModel;