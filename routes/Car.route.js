// let express = require("express");
// let cityRouter = express.Router();

// const { CityModal } = require("../model/city.model");

// cityRouter.get("/dashboard", async (req, res) => {
//   try {
//     const users = await CityModal.find();
//     res.send(users);
//   } catch (err) {
//     res.send({ msg: "cannot get cities details", err: err.message });
//   }
  
// });

// cityRouter.post("/addcity", async (req, res) => {
  
//   const payload = req.body;
//   try {
//     const newcar = new CityModal(payload);
//     await newcar.save();
//     res.send({ msg: "created city details successfully" });
//   } catch (err) {
//     res.send({ msg: "not added city details", err: err.message });
//   }
// });

// module.exports = {
//   cityRouter,
// };
