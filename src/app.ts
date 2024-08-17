import express, { urlencoded, json } from "express";
import { Response, Request, Express, NextFunction } from "express";
import { healthRouter } from "./routers/health.js";
import { logger } from "./middleware/log.js";
import { globalErr } from "./middleware/error.js";
import { main } from "./main.js";
import { getCurrencyRouter } from "./routers/getCurrency.js";
import { getCurrencyValue } from "./routers/getCurrencyValue.js";
import { postCurrency } from "./routers/currencyRoute.js";
import dotenv from "dotenv";
dotenv.config();
const port: number = Number(process.env.PORT) || 8000;

const app: Express = express();
app.use(logger);
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use("/health", healthRouter);
app.use("/getCurrency", getCurrencyRouter);
app.use(globalErr);
app.use("/", postCurrency);
app.post(
  "/currencyValue",
  async (req: Request, res: Response, next: NextFunction) => {
    const currency = req.body;
    const data = await getCurrencyValue(currency.currency);
    res.send(data).status(200);
  }
);

main(port, app);
