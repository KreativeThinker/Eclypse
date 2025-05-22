import { Router } from "express";
import type { Testimonial } from "../../../shared/types";

const testimonialRouter = Router();

const testimonials: Testimonial[] = [
  {
    id: 1,
    productid: "S1",
    name: "Random Woman",
    location: "NY, USA",
    text: "Understated, but unforgettable. It feels like it was made for me",
    avatar: "/media/avatars/woman1.jpg",
  },
  {
    id: 2,
    productid: "S1",
    name: "Guy with Glasses",
    location: "CA, USA",
    text: "It changed how I feel about clothing.",
    avatar: "/media/avatars/man1.jpg",
  },
  {
    id: 3,
    productid: "S1",
    name: "Cool Woman",
    location: "TX, USA",
    text: "Minimal, stylish, perfect.",
    avatar: "/media/avatars/woman2.jpg",
  },
];

testimonialRouter.get("/", (req, res) => {
  res.json(testimonials);
});

export default testimonialRouter;
