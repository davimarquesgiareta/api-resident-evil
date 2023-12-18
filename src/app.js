import express from "express";
import databaseConnect from "./config/dbConnect.js";
import item from "./models/Item.js";

const connection = await databaseConnect();

connection.on("error", (err) => {
  console.error("error", err);
});

connection.once("open", () => {
  console.log("Connection succesfull!");
});

const app = express();
app.use(express.json());


const chest_items = [
  {
    id: 2,
    name: "Shotgun",
    amount: 1,
    description: "A shotgun with firepower",
  },
];

const inventory_items = [
  {
    id: 1,
    name: "Handgun",
    amount: 1,
    description: "A handgun with firepower",
  },
];

function findItemById(id) {
  return items.findIndex((item) => {
    return item.id === Number(id);
  });
}

// ------- ALL -------------------------------------------
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Resident Evil API! 🧟");
});

app.get("/:version/items", async (req, res) => {
  const listItems = await item.find({});
  res.status(200).json(listItems);
});

app.get("/:version/item/:id", (req, res) => {
  const index = findItemById(req.params.id);
  res.status(200).json(items[index]);
});

// ------- CHEST -------------------------------------------
app.get("/:version/chest/items", (req, res) => {
  res.status(200).json(chest_items);
});

app.post("/:version/chest/item", (req, res) => {
  chest_items.push(req.body);
  res.status(201).send("Item sent to chest");
});

// ------- INVENTORY ----------------------------------------
app.get("/:version/inventory/items", (req, res) => {
  res.status(200).json(inventory_items);
});

app.post("/:version/inventory/item", (req, res) => {
  inventory_items.push(req.body);
  res.status(201).send("Item sent to inventory");
});

app.delete("/:version/inventory/:id", (req, res) => {
  const index = findItemById(req.params.id);
  inventory_items.splice(index, 1);
  res.status(200).send("Item deleted");
});

export default app;
