const { connection } = require("./config/db");

let express = require("express");
let cors = require("cors");
const { cityRouter } = require("./routes/Car.route");



let app = express();
require("dotenv").config();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is city track backend");
});

app.use("/addcity", cityRouter);


app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (err) {
    console.log("not connected to db");
  }
  console.log(`run on port ${process.env.port}`);
});