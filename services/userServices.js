var repoUsers = require('../repositories/usersRepo');
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
        return {success: false, status: 201, message:'', object: repoUsers.addUser(user)};
    
    }
}

module.exports = userServices;

