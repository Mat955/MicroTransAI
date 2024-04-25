import mongoose from "mongoose";

const connectionString = `mongodb+srv:/${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@next-js-translator-ematpro.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000`;

if (!connectionString) {
  throw new Error("MongoDB connection string is required");
}

const connectDB = async () => {
  if (mongoose.connections[0].readyState >= 1) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(connectionString);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

export default connectDB;
