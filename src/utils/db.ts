import mongoose from "mongoose";

const connectDb = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.DB_URl as string);
    console.log("Database connected successfully");
  } catch (error: any) {
    console.error("Error connecting to Database:", error.message);
    process.exit(1); // optional: exit if DB connection fails
  }
};

export default connectDb;
