import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String },
    amount: { type: Number },
    description: { type: String },
    category: { type: String },
    image: { type: String },
    isMixedYet: { type: Boolean },
    isPossibleToMix: { type: Boolean },
    othersIdsToMix: { type: Array },
    itemIdsToMixThisItem: { type: Array },
    isEquipped: { type: Boolean },
  },
  { versionKey: false }
);

const item = mongoose.model("items", itemSchema);

export default item;
