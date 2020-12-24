// RUN INSIDE APP
// Add To App.js

import StorageUtils from '../src/utils/storage-utils';
import UserModel from '../src/models/user-model';


async function listAllKeys() {
    const all = StorageUtils.retrieveAll('');
    return all;
}

async function listAllUsers() {
    const users = await UserModel.getAll();
    return users;
}

async function getUserById() {
    const user = await UserModel.getById('ab12c6b1-7539-4b90-90c2-c055d21ceb51');
    return user;
}

async function getUserByEmailAndPass() {
    const user = await UserModel.getByEmailAndPass('ramyres90@gmail.com', 'qwe123');
    return user;
}

async function getUserByEmailAndPassErrado() {
    const user = await UserModel.getByEmailAndPass('adm@gmail.com', 'qwe123');
    return user;
}

async function getUserByEmailAndPassErradoA() {
    const user = await UserModel.getByEmailAndPass('wedercarlos20@gmail.com', '123');
    return user;
}

async function getUserByEmailAndPassErrado2() {
    const user = await UserModel.getByEmailAndPass('', 'qwe123');
    return user;
}
async function getUserByEmailAndPassErrado3() {
    const user = await UserModel.getByEmailAndPass('ramyres90@gmail.com', '');
    return user;
}

//(())
let runCount = 0;
async function run(func) {
    const resp = await func();
    let c = runCount++;
    console.log(`(${c})>> ${func.name}()`);
    console.log(`(${c})>>`, "<<", resp);
}

console.log('--- ASYNC STORAGE TOOLS ---');

run(listAllUsers)
run(listAllKeys)
run(getUserById)
run(getUserByEmailAndPass)
run(getUserByEmailAndPassErrado)
run(getUserByEmailAndPassErradoA)
run(getUserByEmailAndPassErrado2)
run(getUserByEmailAndPassErrado3)

export default { run }
