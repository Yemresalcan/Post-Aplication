const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = 5000;
const dotenv = require("dotenv");

// Routes

const categoryRoute = require("./routes/categories");
const productRoute = require("./routes/product");
const billRoute = require("./routes/bills");




dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};
app.use(express.json());
app.use(cors());

app.use("/api/categories",categoryRoute);
app.use("/api/products",productRoute);
app.use("/api/bills",billRoute);



app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`);
});