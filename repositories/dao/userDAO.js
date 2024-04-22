
const userDAO = {
    insertUser(user) {
        userConnection.insert(user);
    },
    updateUser(user) {
        userConnection.update(user);
    },
    deleteUser(id) {
        userConnection.delete(id);
    },
    selectUsers(where) {
        userConnection.select(where);
    },
    selectUser(id){
        userConnection.selectUser(id);

    },
    setConnection(userConnection){
        console.log('setando conexao');
        this.conection = userConnection;
    },

}

module.export = userDAO;