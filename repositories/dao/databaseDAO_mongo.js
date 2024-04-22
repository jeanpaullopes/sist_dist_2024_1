const { MongoClient }  = require("mongodb");
const uri = 'mongodb+srv://alunos:sofber-tumnet-Dobqu1@sistemasdistribuidos.lmknzpy.mongodb.net/';
const client = new MongoClient(uri);
const dbName = 'sample_mflix';
const database = client.db(dbName);
const movies = database.collection('movies');
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
        return await movies.find({}).project({title:true}).toArray();
        
    }
}
connection.connect();
module.exports = connection;