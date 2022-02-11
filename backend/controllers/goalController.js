const asyncHandler = require("express-async-handler"); //// if will not goint to use tryCatch

// @desc Get goals
// @route Get  /api/goals
// @access Private
const getGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

// @desc Get goals
// @route POST  /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  //   console.log(req.body);

  if (!req.body.text) {
    // res.status(400).json({ message: "please add a text field" });
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.status(200).json({ message: "Set goals" });
});

// @desc Update goals
// @route PUT  /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goals ${req.params.id}` });
});

// @desc detele goals
// @route DELETE  /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goals ${req.params.id}` });
});

module.exports = {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
