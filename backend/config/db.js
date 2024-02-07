import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected Succefully : ${conn.connection.host}`);

    }catch(error){
       console.log(`Error: ${error.message}`);
       process.exit(1);
    }
};

export default connectDB;

// const MONGO_URI = process.env.MONGO_URI;

// const connectDB = async () => {
//   try {
//     await mongoose.connect(MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     });

//     console.log('MongoDB Connected');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
//     process.exit(1);
//   }
// };

// export default connectDB;