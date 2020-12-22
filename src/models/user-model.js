import ModelUtils from "../utils/model-utils";

const UserModel = ModelUtils.FactoryModel('users');

UserModel.getByEmailAndPass = async (email, pass) => {
    //TODO:
    //UserModel.getAll()
    console.log(email, pass);
    return Promise.resolve(null);
}

export default UserModel;