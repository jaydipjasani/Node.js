const dbConnect = require('./mongoDB');

const updateDB = async () => {

    let db = await dbConnect();
    let result = db.updateOne(
        {name : "vivo v7"},
        {$set : {name : "vivo v7+"}}
    )

    console.log("result",await result);
}

updateDB()