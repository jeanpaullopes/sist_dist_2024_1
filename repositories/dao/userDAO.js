const userDAO = {
    conection: null,
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
        this.conection = userConnection;
    }
}

export default userDAO;