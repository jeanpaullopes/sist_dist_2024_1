var repoUsers = require('../repositories/usersRepo');
const userServices = {
    getAllUsers() {
        return repoUsers.getUsers();
    },
    getUser(id) {
        return repoUsers.getUser(id);
    },
    addUser(user) {
        return repoUsers.addUser(user);
    
    }



}