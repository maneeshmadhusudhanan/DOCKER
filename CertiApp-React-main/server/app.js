const express = require("express");
const { mongoose } = require("mongoose");
const app = express();
const cors = require("cors");
const routes = require("./routes/routes");

app.use(
    cors({
        origin: "http://localhost:5175",
    })
);

app.use(express.json());

app.use("/", routes);

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose.connect("mongodb://mongodb1:27017/Dapp-React");

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});