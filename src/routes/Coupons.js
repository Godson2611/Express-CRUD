/** @format */

const express = require("express");
const CouponController = require("../controller/Coupons");
const router = express.Router();

router.get("/", CouponController.getAllCoupons);
router.get("/:id", CouponController.getCouponsById);
router.post("/", CouponController.createCoupons);
router.put("/:id", CouponController.editCouponsById);
router.delete("/:id", CouponController.deleteCouponsById);

module.exports = router;
