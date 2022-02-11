const express = require("express");
const router = express.Router();
const {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

router.route("/").get(getGoal).post(setGoal);
// router.get("/", getGoals); // convert to one route using chaining
// router.post("/", setGoals);

router.route("/:id").delete(deleteGoal).put(updateGoal);
// router.put("/:id", updateGoals); // convert to one route using chaining
// router.delete("/:id", deleteGoals);

module.exports = router;
