import { Router } from "express";

const productRouter = Router();

productRouter.get("/", (req, res) => {
  res.json({
    id: "cloth-1",
    name: "Eclypse Overshirt",
    price: 4999,
    sizes: ["S", "M", "L", "XL"],
    media: {
      video: "/media/videos/video-3.mp4",
      images: [
        "/media/images/product-side.png",
        "/media/images/product-back.png",
        "/media/images/product-back-long.png",
      ],
    },
    description:
      "Structured utility overshirt with reinforced stitchwork and curved collar.",
  });
});

export default productRouter;
