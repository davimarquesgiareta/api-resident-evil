import express from "express";
import ItemController from "../controllers/itemController.js";

const routes = express.Router();

routes.get("/:version/items", ItemController.listItems);

export default routes;