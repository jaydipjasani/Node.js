const dbConnection = require('./mongoDB');

// get collection data
const getData = async () => {
    let getCollection = await dbConnection()

    //** Find All data of database */

    // let getItems = await getCollection.find().toArray()

    //** Find Selected Item of Database */

    let getItems = await getCollection.find({ name: 'vivo v7' }).toArray()
    console.log("ee ", getItems);
}

getData()