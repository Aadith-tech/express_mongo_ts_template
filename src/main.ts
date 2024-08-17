import connectDB from "./config/db.js";
import { Express } from "express";
export async function main(PORT: number, APP: Express) {
  APP.listen(PORT, () => {
    connectDB();
    console.log(`Server is listening at port ${PORT} its all working`);
  });
}
