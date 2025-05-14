const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8080;

// Mongo connection ----------------------------------------------------------
const uri =
  process.env.MONGO_URI ||
  "mongodb://user:pass@localhost:27017/appdb?authSource=admin";
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// simple schema
const Item = mongoose.model(
  "Item",
  new mongoose.Schema({
    name: { type: String, required: true },
  })
);

// routes --------------------------------------------------------------------
app.use(express.json());

app.get("/", (_, res) =>
  res.json({ message: "Hello from SIT737 – DB version" })
);

app.post("/items", async (req, res) => {
  const doc = await Item.create({ name: req.body.name });
  res.status(201).json(doc);
});

app.get("/items", async (_, res) => {
  const list = await Item.find().lean();
  res.json(list);
});

app.delete("/items/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

// health
app.get("/health", (_, res) => res.status(200).json({ status: "OK" }));

// start ---------------------------------------------------------------------
app.listen(PORT, () => console.log(`App running on ${PORT}`));
