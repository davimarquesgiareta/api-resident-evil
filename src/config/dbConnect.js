import mongoose from "mongoose";

async function databaseConnect() {
  mongoose.connect(
    "mongodb+srv://davimgcb:8mTUHKjxk7CzxHkv@cluster0.zdatpmh.mongodb.net/resident-evil?retryWrites=true&w=majority"
  );

  return mongoose.connection;
}

export default databaseConnect;