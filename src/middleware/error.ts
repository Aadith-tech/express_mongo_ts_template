import { Response, Request, NextFunction } from "express";

export function globalErr(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res
    .send({
      msg: "Something went wrong",
    })
    .status(500);
  next();
}
