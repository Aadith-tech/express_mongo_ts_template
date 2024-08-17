import { Router } from "express";
const router = Router();

router.get("/", (req, res, next) => {
  try {
    res.send("all are working").status(200);
  } catch (error) {
    res.send(error).status(500);
    next(error);
  }
});
export { router as healthRouter };
