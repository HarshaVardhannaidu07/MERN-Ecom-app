import  express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import {notFound,errorHandler} from './middleware/errorMiddleware.js';



const port = process.env.PORT;

 connectDB(); // connect to mongodb
const app=express();

app.use(cors({
    origin: 'http://localhost:3000',
  }));

app.get('/',(req,res) => {
    res.send('API is running...')
});

app.use('/api/products',productRoutes);

app.use(notFound);
app.use(errorHandler);




app.listen(port, () => console.log(`server running on port ${port}`));
