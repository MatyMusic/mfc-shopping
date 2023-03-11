import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connect = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("mongoDB connection");
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
};

export default connectToDb;
