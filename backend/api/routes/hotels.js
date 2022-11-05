const express = require("express");
const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotelById,
  getAllHotels,
} = require("../controllers/hotelController");

const router = express.Router();

//CREATE
router.post("/", createHotel);
//UPDATE
router.put("/:id", updateHotel);
//DELETE
router.delete("/:id", deleteHotel);
//GET
router.get("/:id", getHotelById);
//GETALL
router.get("/", getAllHotels);

module.exports = router;
