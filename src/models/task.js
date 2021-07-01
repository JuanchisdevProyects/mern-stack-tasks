const { Schema, model } = require("mongoose");

const task_schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },

})

module.exports = model("Task",task_schema);
