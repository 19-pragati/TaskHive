// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");

// // assign task
// router.post("/assign", async (req, res) => {
//   const { userId, task } = req.body;

//   const user = await User.findById(userId);
//   user.tasks.push(task);
//   await user.save();

//   res.json(user);
// });

// // update task status
// router.put("/update", async (req, res) => {
//   const { userId, taskId, status } = req.body;

//   const user = await User.findById(userId);
//   const task = user.tasks.id(taskId);

//   task.status = status;
//   await user.save();

//   res.json(user);
// });

// module.exports = router;