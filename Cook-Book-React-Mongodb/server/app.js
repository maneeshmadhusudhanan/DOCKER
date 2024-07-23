const express = require("express");
const { mongoose } = require("mongoose");
const app = express();
const cors = require("cors");
const routes = require("./routes/signup");
const cookieParser = require("cookie-parser");
const authRoute=require('./routes/cookbook')
app.use(cookieParser())
app.use(express.json());
app.use(
  cors({ 
    origin: "http://localhost:5173",
  })
);
app.use("/", routes);
app.use("/",authRoute)
const PORT = 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
mongoose.connect("mongodb://mongodb:27017/cook-Book");
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Database Connected");
});
