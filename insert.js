const dbConnect = require('./mongoDB');

const insertData = async () => {

    let db = await dbConnect();
    let result = db.insertOne({
        name : "iPhone13",price : 70000,condition:100
    })
    console.log("ee result ", await result);

}

insertData()