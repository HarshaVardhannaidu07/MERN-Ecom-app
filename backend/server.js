import  express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import cors from 'cors';
import products from './data/products.js';
const port = process.env.PORT;

connectDB(); // connect to mongodb
const app=express();

app.use(cors({
    origin: 'http://localhost:3000',
  }));

app.get('/',(req,res) => {
    res.send('API is running...')
});

app.get('/api/products',(req,res) => {
    res.json(products);
})

app.get('/api/products/:id',(req,res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});



app.listen(port, () => console.log(`server running on port ${port}`));
