import item from "../models/Item.js";

class ItemController {
  static async listItems(req, res) {
    const listItems = await item.find({});
    res.status(200).json(listItems);
  }
}

export default ItemController;
