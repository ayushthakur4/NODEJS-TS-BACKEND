import mongoose from "mongoose";

const connectDb = async (): Promise<void> => {
  try {
    const mongoUri = process.env.DB_URL || process.env.DB_URl;
    if (!mongoUri) {
      throw new Error("MongoDB connection string (DB_URL) is not defined in environment variables.");
    }
    await mongoose.connect(mongoUri);
    console.log("Database connected successfully");
  } catch (error: any) {
    console.error("Error connecting to Database:", error.message);
    process.exit(1);
  }
};

export default connectDb;
