import { Response, Request, NextFunction } from "express";

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(new Date().toUTCString());
  console.log(req.hostname);
  console.log(req.url);

  next();
}
