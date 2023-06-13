const { connection } = require("./config/db");
let express = require("express");
let cors = require("cors");
const { CityModal } = require("./model/city.model");




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

app.get("/dashboard", async (req, res) => {
  try {
    const users = await CityModal.find();
    res.send(users);
  } catch (err) {
    res.send({ msg: "cannot get cities details", err: err.message });
  }
  
});
app.post("/addcity", async (req, res) => {
  
  const payload = req.body;
  try {
    const newcar = new CityModal(payload);
    await newcar.save();
    res.send({ msg: "created city details successfully" });
  } catch (err) {
    res.send({ msg: "not added city details", err: err.message });
  }
});




app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (err) {
    console.log("not connected to db");
  }
  console.log(`run on port ${process.env.port}`);
});