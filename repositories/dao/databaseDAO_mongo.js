const { MongoClient, ObjectId }  = require("mongodb");
const { getUser } = require("../usersRepo");
const uri = 'mongodb+srv://alunos:sofber-tumnet-Dobqu1@sistemasdistribuidos.85roghf.mongodb.net/?retryWrites=true&w=majority&appName=SistemasDistribuidos';
const client = new MongoClient(uri);
const dbName = 'sample_mflix';
const database = client.db(dbName);
const movies = database.collection('movies');
const users = database.collection('users');
let filmes = [];
const connection = {
    async connect() {
        await client.connect();
        console.log('Connected to MongoDB 1');
    },
    async close() {
        await client.close();
    },
    getFilmes: async () => {
        
        const ret = await database.collection();
        console.log(await movies.count({}));
        //await client.close();
        if (filmes.length == 0) {
            filmes = await movies.find({year: 2015}).toArray();
        }
        let html = '';
        filmes.forEach(element => {
            html += '<p>' + element.title + ' <img src="'+element.poster+'"/></p>\n';
        });
        return filmes;
        
    },
    getUsers: async () => {
        return await users.find({}).toArray();
    },

}
connection.connect();
module.exports = connection;
