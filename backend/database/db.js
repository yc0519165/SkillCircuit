const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("MongoDB Connected . . .");
  } catch (error) {
    console.log("Connection error", error);
  }
};
connectDB();
