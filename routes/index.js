var express = require("express");
var router = express.Router();
var Asset = require("../models/asset");
var Task = require("../models/task");
var Worker = require("../models/worker");

/* GET home page. */

router.get("/", function(req, res, next) {
  res.json({ Message: "hello world!!" });
});

// router.post("/add-asset"); Done
// router.post("/add-task"); Done
// router.post("/add-worker"); Done
// router.get("/assets/all"); Done
// router.post("/allocate-task");Done
// router.get("get-tasks-for-worker/:id")

router.post("/add-asset", async (req, res, next) => {
  try {
    let newAsset = new Asset();
    newAsset.name = req.body.name;
    await newAsset.save();
    return res.json({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.json({ message: "error" });
  }
});

router.get("/assets/all", async (req, res, next) => {
  try {
    let asset = await Asset.find();
    return res.json(asset);
  } catch (error) {
    console.log(error);
    res.json({ message: "error" });
  }
});

router.post("/add-task", async (req, res, next) => {
  try {
    let newTask = new Task();
    newTask.name = req.body.name;
    newTask.asset = req.body.asset;
    await newTask.save();
    return res.json({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.json({ message: "error" });
  }
});

router.post("/add-worker", async (req, res, next) => {
  try {
    let newWorker = new Worker();
    newWorker.name = req.body.name;
    await newWorker.save();
    return res.json({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.json({ message: "error" });
  }
});

router.get("/tasks/all", async (req, res, next) => {
  try {
    let data = await Task.find({ assigned: false }).populate("asset");
    return res.json(data);
  } catch (error) {
    console.log(error);
    res.json({ message: "error" });
  }
});

router.get("/workers/all", async (req, res, next) => {
  try {
    let data = await Worker.find();
    return res.json(data);
  } catch (error) {
    console.log(error);
    res.json({ message: "error" });
  }
});

router.post("/allocate-task", async (req, res, next) => {
  try {
    let Data = await Task.findById(req.body.taskId);
    Data.assigned = true;
    Data.worker = req.body.workerId;
    Data.timeOfAllocation = req.body.timeOfAllocation;
    await Data.save();
    return res.json({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.json({ message: "error" });
  }
});

router.get("/get-tasks-for-worker/:id", async (req, res, next) => {
  try {
    let data = await Task.find({ worker: req.params.id }).populate("asset");
    return res.json(data);
  } catch (error) {
    console.log(error);
    res.json({ message: "error" });
  }
});

module.exports = router;
