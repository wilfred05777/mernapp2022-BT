const express = require("express");
const router = express.Router();
const {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoal).post(protect, setGoal);
// router.get("/", getGoals); // convert to one route using chaining
// router.post("/", setGoals);

router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);
// router.put("/:id", updateGoals); // convert to one route using chaining
// router.delete("/:id", deleteGoals);

module.exports = router;
