const mongoose = require('mongoose');

//  Connection
mongoose.connect('mongodb://localhost:27017/e-com');
//  Schema
//  Schema means the valid fields
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
})

const saveInDB = async () => {

    //  Model
    //  Model creates the connection between node js  and mongodb database
    let ProductModel = mongoose.model('products', ProductSchema);

    //  Make instance for new data
    let data = new ProductModel(
        {
            name: "vivo 10",
            price: 35000,
            brand: "vivo",
            category: "mobiles"
        }
    );
    let result = await data.save()
    console.log(result);

}
// main()

const updateInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.updateOne(
        {name:"vivo 10"},
        {
            $set:{
                price: 32000
            }
        }
    )
        console.log(data)
}

// updateInDB();

const deleteInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.deleteMany({name:"vivo 10"})
    console.log(data);
}
// deleteInDB()

const findInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.find({})
    console.log(data);
}
findInDB()