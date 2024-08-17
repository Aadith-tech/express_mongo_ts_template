import express from "express";
import currencyModel from "../models/currency.js";
const router = express.Router();

router.post("/putCurrency", async (request, response) => {
  const article = new currencyModel(request.body);

  try {
    await article.save();
    response.send(article);
  } catch (error) {
    response.status(500).send(error);
  }
});

export { router as postCurrency };
