const asyncHandler = require("express-async-handler");
const Tasks = require("../models/task");

const taskRegister = asyncHandler(async (req, res) => {
  const data = await req.body;
  console.log(data)
  try {
    const task = await Tasks.create(data);
    if (task) {
      return res.status(201).send(task);
    }
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
});

module.exports = {
  taskRegister
};
