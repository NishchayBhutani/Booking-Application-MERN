const express = require("express");
const { verifyAdmin } = require("../utils/verifyToken");
const {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoomById,
  getAllRooms,
} = require("../controllers/roomController");
const router = express.Router();

//CREATE
router.post("/:hotelId", verifyAdmin, createRoom);
//UPDATE
router.put("/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);
//GET
router.get("/:id", getRoomById);
//GETALL
router.get("/", getAllRooms);

module.exports = router;
