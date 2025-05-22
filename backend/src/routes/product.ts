import { Router } from "express";
import type { Product } from "@shared/types/index";

const productRouter = Router();

const product: Product = {
  id: "S1",
  name: "Silhouette No. 1 - Vermillion",
  price: 7999,
  sizes: ["XS", "S", "M", "L", "XL"],
  media: {
    video: "/media/videos/video-3.mp4",
    images: [
      "/media/images/product-side.png",
      "/media/images/product-back.png",
      "/media/images/product-back-long.png",
    ],
  },
  description:
    "A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem, this piece captures presence without force. Worn here in the stillness of a city in motion.",
};

productRouter.get("/", (req, res) => {
  res.json(product);
});

export default productRouter;
