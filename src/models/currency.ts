// blog_app/models/article.js
import mongoose from "mongoose";
import { ICurrency } from "../types/types.js";
const Currency = new mongoose.Schema<ICurrency>({
  currency: {
    type: "string",
    required: true,
  },
});

const currencyModel = mongoose.model<ICurrency>("currency", Currency);
export default currencyModel;
