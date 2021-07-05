const express = require("express"),
    router = express.Router();

const Task = require("../models/task");
router.get("/", async (req, res) => {
    let tasks_response = await Task.find();

    res.json(tasks_response);
});

router.get("/:id", async (req, res) => {
    let tasks_response = await Task.findById(req.params.id);

    res.json(tasks_response);
});
router.post("/", async (req, res) => {
    const { title, description } = req.body;

    const task = new Task({
        title,
        description,
    });

    await task.save();

    res.json({ status: "Task Posted Successfuly" })
});
router.put("/:id", async (req, res) => {
    const { title, description } = req.body;

    const newTask = { title, description };

    await Task.findByIdAndUpdate(req.params.id, newTask);

    res.json({ status: "Task Updated Successfuly" })

})
router.delete("/:id", async (req, res) => {
    await Task.findByIdAndRemove(req.params.id)
    res.json({ status: "Task Deleted Successfuly" })

})
module.exports = router;
