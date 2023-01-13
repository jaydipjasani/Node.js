const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'mobileZone';

// make separate function for connect database 

async function dbConnection() {
    let connectDB = await client.connect();
    let getDB = connectDB.db(dbName);
    return getDB.collection('products')
}

module.exports = dbConnection