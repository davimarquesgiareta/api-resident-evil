import express from "express";
import databaseConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await databaseConnect();

connection.on("error", (err) => {
  console.error("error", err);
});

connection.once("open", () => {
  console.log("Connection succesfull!");
});

const app = express();
routes(app);

export default app;
