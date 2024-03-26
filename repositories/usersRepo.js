const banco = new Map();
const repo = {
    addUser(user) {
        if (banco.get(user.id) != undefined){
            return false;
        }
        if (user.id == undefined){
            user.id = banco.size + 1;
        }
        banco.set(user.id, user);
        return user;
    },
    getUser(id) {
        return banco.get(parseInt(id));
    },
    getUsers() {
        return Array.from(banco.values());
    }

}
module.exports = repo;