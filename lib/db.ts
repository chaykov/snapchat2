import mongoose, { Connection } from "mongoose";

let isConnected: Connection | boolean = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected.");
    return isConnected;
  }

  try {
    const res = await mongoose.connect(process.env.MONGO_URI!);
    isConnected = res.connection;
    console.log("MongoDB has been connected successfully!");
    return isConnected;
  } catch (error) {
    console.log(error);

    throw error;
  }
};

export default connectDB;
