/** @format */

const coupons = [
    {
      name: "October Offer",
      code: "XBQ-FGY",
      startDate: "2023-10-12",
      endDate: "2023-10-20",
      offerValue: 100,
      discount: 10,
      status: true,
    },
    {
      name: "World Childrens Day",
      code: "XOKLKJ",
      startDate: "2023-10-14",
      endDate: "2023-10-20",
      offerValue: 200,
      discount: 20,
      status: true,
    },
  ];

const getAllCoupons = (req, res) => {
  res.status(200).send({ message: "Data Fetch Successful", coupons });
};

const getCouponsById = (req, res) => {
  const id = Number(req.params.id);
  if (id !== NaN && id < coupons.length) {
    res
      .status(200)
      .send({ message: "Data Fetch Successful", coupons: coupons[id] });
  } else {
    res.status(400).send({
      message: "Invalid Id",
    });
  }
};

const createCoupons = (req, res) => {
  let data = req.body;
  let filteredData = coupons.filter((e) => e.name === data.name);
  if (filteredData.length === 0) {
    coupons.push(data);
    res.status(201).send({
      message: "Coupon created successfully",
    });
  } else {
    res.status(400).send({
      message: "Coupon Code Already Exists",
    });
  }
};

const editCouponsById = (req, res) => {
  const id = Number(req.params.id);
  let data = req.body;
  if (id !== NaN && id < coupons.length) {
    coupons.splice(id, 1, data);
    res.status(201).send({ message: "Coupon Edited Successfully" });
  } else {
    res.status(400).send({
      message: "Invalid Id",
    });
  }
};

const deleteCouponsById = (req, res) => {
  const id = Number(req.params.id);
  if (id !== NaN && id < coupons.length) {
    coupons.splice(id, 1);
    res.status(201).send({ message: "Coupon Deleted Successfully" });
  } else {
    res.status(400).send({
      message: "Invalid Id",
    });
  }
};

module.exports = {
  getAllCoupons,
  getCouponsById,
  createCoupons,
  editCouponsById,
  deleteCouponsById,
};
