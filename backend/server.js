import  express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

import {notFound,errorHandler} from './middleware/errorMiddleware.js';
import cookieParser from "cookie-parser";



const port = process.env.PORT;

 connectDB(); // connect to mongodb
const app=express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//cokie parser middleware
app.use(cookieParser());


//CORS rules for accesing the right frontend
app.use(cors({
    origin: 'http://localhost:3000',
  }));

app.get('/',(req,res) => {
    res.send('API is running...')
});

app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);


app.use(notFound);
app.use(errorHandler);




app.listen(port, () => console.log(`server running on port ${port}`));
