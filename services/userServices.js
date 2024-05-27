var repoUsers = require('../repositories/usersRepo');
let  userDAO  = require('../repositories/dao/userDAO'); 
const {getFilmes, getUsers} = require( '../repositories/dao/databaseDAO_mongo');

const userServices = {
    getAllUsers() {
        return repoUsers.getUsers();
    },
    getUser(id) {
        return repoUsers.getUser(id);
    },
    addUser(user) {
        if (this.getUser(user.id) != undefined){
            return {success: false, status: 403, message: 'Id já existe'};
          }
        userDAO.insertUser(user);
        return {success: false, status: 201, message:'', object: repoUsers.addUser(user)};
    
    },
    teste: () => {
        console.log('no teste() userServices');
        return getFilmes();
        //return getUsers();


    }
}

module.exports = userServices;

