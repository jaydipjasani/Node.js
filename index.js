const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mobileZone')

// Add schema.. now user enter whatever values but it will insert only 2 things into DB
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
});

const insertData = async () => {
    let productModel = mongoose.model('products', productSchema);
    let data = await new productModel({
        name: "samsung A10",
        price: 25000,
    })
    let result = await data.save();
    console.log("result", result);
}
// insertData();


//** Update Item */

const updateData = async () => {
    let updateItem = mongoose.model('products', productSchema);
    let data = await updateItem.updateOne(
        { name: "samsung A10" },
        { $set: { price: 28000, name: "Samsung A11" } }
    )
    console.log("data", data);
}
// updateData();


//** Delete Item */

const deleteData = async () => {
    let deleteItem = mongoose.model('products', productSchema);
    let data = await deleteItem.deleteOne(
        { name: "vivo v7+" }
    )

    console.log("data", data);
}
// deleteData();


//** Find or see all items */

const findData = async () => {
    let finditem = mongoose.model('products', productSchema);
    let data = await finditem.find()

    console.log("find data", data);
}
// findData();