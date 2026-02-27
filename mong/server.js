// server.js
const cors = require("cors");
const express = require("express");
const connectDB = require("./config/db");
const ExamPreparationTopic = require("./model/ExamPreparationTopic");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("../frontend"));

// Connect Database
connectDB();

/* ============================
   CREATE Topic
============================ */

app.post("/topics", async (req, res) => {
  try {
    const topic = await ExamPreparationTopic.create(req.body);
    res.status(201).json(topic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/* ============================
   GET All Topics
============================ */

app.get("/topics", async (req, res) => {
  try {
    const topics = await ExamPreparationTopic.find();
    res.json(topics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ============================
   GET Single Topic
============================ */

app.get("/topics/:id", async (req, res) => {
  try {
    const topic = await ExamPreparationTopic.findById(req.params.id);

    if (!topic) {
      return res.status(404).json({ message: "Topic not found" });
    }

    res.json(topic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/* ============================
   UPDATE Topic
============================ */

app.put("/topics/:id", async (req, res) => {
  try {
    const updated = await ExamPreparationTopic.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Topic not found" });
    }

    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/* ============================
   DELETE Topic
============================ */

app.delete("/topics/:id", async (req, res) => {
  try {
    const deleted = await ExamPreparationTopic.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Topic not found" });
    }

    res.json({ message: "Topic Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log("🚀 Server Running on Port 3000");
});