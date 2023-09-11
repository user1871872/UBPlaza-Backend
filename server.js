const express = require('express')

const app = express()

const mongoose = require('mongoose')

const productModel = require('./models/product')
const reserveproductModel = require('./models/reserveProduct')

const cors = require('cors')

app.use(express.json());

app.use(cors());


mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://ub_plaza:ZI8ZuEQDzOhgLY7Q@cluster0.itrcef0.mongodb.net/ub_plaza?retryWrites=true&w=majority')

//listProducts
app.get("/getProduct", (req, res) => {
    productModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});
//addProducts
app.post("/addProduct", async (req, res) => {
    const { title, image, price, stock } = req.body;
    const product = { title: title, price: price, stock: stock, image: image }
    const newProduct = await productModel.create(product);
    res.json(newProduct);
});
//find id of products
app.get("/getProduct", (req, res) => {
    productModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

//reservation
app.get("/getReservation", (req, res) => {
    reserveproductModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});
app.post("/addReservation", async (req, res) => {
    const Resproduct = req.body;
    const newReserve = new reserveproductModel(Resproduct);
    await newReserve.save();
    res.json(Resproduct);
});
// app.post("/addReservation", async (req, res) => {
//     const {item, name, Idnumber, phoneNumber, date } = req.body;
//     const reservation = { item: item, name: name, Idnumber: Idnumber, phoneNumber: phoneNumber, date: date }
//     const newProduct = await productModel.create(reservation);
//     res.json(newProduct);
// });

app.post("/deleteProduct", async (req,res) =>{
    const{productid}=req.body;
    try {
        productModel.deleteOne(
            {_id: productid},function(err, res) {
                console.log(err);
            });
        res.send({status: "OK", data: "deleted"});
    } catch (error) {
        console.log(error);
    }
})
app.get("/singleProduct/:id", (req, res) => {
    productModel.findById({_id: req.params.id}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});
app.listen(4000, () => {

    console.log("Connected to server port 4000")
});