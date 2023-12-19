import item from "../models/Item.js";

class ItemController {
  static async listItems(req, res) {
    try {
      const listItems = await item.find({});
      res.status(200).json(listItems);
    } catch (error) {
      res.status(500).json({ message: `${error.message}` });
    }
  }
}

export default ItemController;
