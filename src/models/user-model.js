import ModelUtils from "../utils/model-utils";
import { cryptograph } from "../utils/commons-utils";

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

export default UserModel;