import { Router } from "express";

const checkoutRouter = Router();

checkoutRouter.post("/", (req, res) => {
  const order = req.body;
  console.log("Received order:", order);
  // Simulate success/failure
  const success = Math.random() > 0.2;
  if (success) {
    res.status(200).json({ message: "Order placed successfully." });
  } else {
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again." });
  }
});

export default checkoutRouter;
