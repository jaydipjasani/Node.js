const dbConnect = require('./mongoDB');

const deleteData = async () => {

    let db = await dbConnect();
    let result = db.deleteOne(
        {name : "Mi pro"}
    )

    // use deleteMany() to delete all Mi pr named items
}

deleteData()