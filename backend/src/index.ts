import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import productRouter from "./routes/product";
import testimonialRouter from "./routes/testimonials";
import checkoutRouter from "./routes/buy";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const apiRouter = express.Router();

app.use(cors());
app.use(express.json());

apiRouter.use("/product", productRouter);
apiRouter.use("/testimonials", testimonialRouter);
apiRouter.use("/checkout", checkoutRouter);

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
