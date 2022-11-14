const express = require("express");
const {
  updateUser,
  deleteUser,
  getUserById,
  getAllUsers,
} = require("../controllers/userController");
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require("../utils/verifyToken");

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("token verified");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("user authenticated");
// });

// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("admin verified, you can delete any account");
// });

//UPDATE
router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id", verifyUser, deleteUser);
//GET
router.get("/:id", verifyUser, getUserById);
//GETALL
router.get("/", verifyAdmin, getAllUsers);

module.exports = router;
