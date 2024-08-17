import { Response, Request, NextFunction } from "express";
import { Router } from "express";
import dotenv from "dotenv";
dotenv.config();
export const getCurrency = async () => {
  const API: string = String(process.env.API);
  const response = await fetch(API, {
    method: "GET",
  });
  const data_value = await response.json();

  return data_value;
};
const router = Router();
router.get("/", async (req, res, next) => {
  const result = await getCurrency();
  res.send(result);
});

export { router as getCurrencyRouter };
