/** @format */

const express = require("express");
const cros = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(cros());
app.use(express.json());
const AppRouters = require('./src/routes/AppRouters')
app.use('/',AppRouters)
// const coupons = [
//   {
//     name: "October Offer",
//     code: "XBQ-FGY",
//     startDate: "2023-10-12",
//     endDate: "2023-10-20",
//     offerValue: 100,
//     discount: 10,
//     status: true,
//   },
//   {
//     name: "World Childrens Day",
//     code: "XOKLKJ",
//     startDate: "2023-10-14",
//     endDate: "2023-10-20",
//     offerValue: 200,
//     discount: 20,
//     status: true,
//   },
// ];

// app.get("/", (req, res) => {
//   res.send(`<h1>hello world</h1>`);
// });

// app.get("/coupons", (req, res) => {
//   res.status(200).send({ message: "Data Fetch Successful", coupons });
// });

// app.get("/coupons/:id", (req, res) => {
//   const id = Number(req.params.id);
//   if (id !== NaN && id < coupons.length) {
//     res
//       .status(200)
//       .send({ message: "Data Fetch Successful", coupons: coupons[id] });
//   } else {
//     res.status(400).send({
//       message: "Invalid Id",
//     });
//   }
// });

// app.post("/coupons", (req, res) => {
//   let data = req.body;
//   let filteredData = coupons.filter((e) => e.name === data.name);
//   if (filteredData.length === 0) {
//     coupons.push(data);
//     res.status(201).send({
//       message: "Coupon created successfully",
//     });
//   } else {
//     res.status(400).send({
//       message: "Coupon Code Already Exists",
//     });
//   }
// });

// app.put("/coupons/:id", (req, res) => {
//   const id = Number(req.params.id);
//   let data = req.body;
//   if (id !== NaN && id < coupons.length) {
//     coupons.splice(id, 1, data);
//     res.status(201).send({ message: "Coupon Edited Successfully" });
//   } else {
//     res.status(400).send({
//       message: "Invalid Id",
//     });
//   }
// });

// app.delete("/coupons/:id", (req, res) => {
//   const id = Number(req.params.id);
//   if (id !== NaN && id < coupons.length) {
//     coupons.splice(id, 1);
//     res.status(201).send({ message: "Coupon Deleted Successfully" });
//   } else {
//     res.status(400).send({
//       message: "Invalid Id",
//     });
//   }
// });

app.listen(PORT, () => console.log("server listening to port 8000"));
