/** @format */

const express = require("express");
const router = express.Router();

const CouponsRouters = require("./Coupons");
const UserRouter = require("./User");

router.use("/coupons", CouponsRouters);
router.use("/user", UserRouter);

module.exports = router;
