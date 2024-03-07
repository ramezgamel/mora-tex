import Carousel from "../components/Carousel";
import Product from "../components/Product";
import { ProductInterface } from "../types/Product";
import { motion as m } from "framer-motion";
import { childrenVariants, parentVariants } from "../animation/Stagger";
export default function Home() {
  const products: ProductInterface[] = [
    {
      _id: "as5a64sd",
      name: "T-shirt round",
      price: 12.5,
      images: ["https://placehold.co/500", "as"],
      size: ["l", "xl", "2xl", "3xl"],
      colors: ["red", "black"],
      description: "asdsf",
      discount: 13,
    },
    {
      _id: "as5a64sd",
      name: "T-shirt round",
      price: 12.5,
      images: ["https://placehold.co/500", "as"],
      size: ["l", "xl", "2xl"],
      colors: ["red", "black"],
      description: "asdsf",
      discount: 13,
    },
    {
      _id: "as5a64sd",
      name: "T-shirt round",
      price: 12.5,
      images: ["https://placehold.co/500", "as"],
      size: ["l", "xl", "2xl"],
      colors: ["red", "black"],
      description: "asdsf",
      discount: 13,
    },
    {
      _id: "as5a64sd",
      name: "T-shirt round",
      price: 12.5,
      images: ["https://placehold.co/500", "as"],
      size: ["l", "xl", "2xl"],
      colors: ["red", "black"],
      description: "asdsf",
      discount: 13,
    },
    {
      _id: "as5a64sd",
      name: "T-shirt round",
      price: 12.5,
      images: ["https://placehold.co/500", "as"],
      size: ["l", "xl", "2xl"],
      colors: ["red", "black"],
      description: "asdsf",
      discount: 13,
    },
    {
      _id: "as5a64sd",
      name: "T-shirt round",
      price: 12.5,
      images: ["https://placehold.co/500", "as"],
      size: ["l", "xl", "2xl"],
      colors: ["red", "black"],
      description: "asdsf",
      discount: 13,
    },
  ];
  return (
    <div>
      <Carousel />
      <m.div
        initial="hidden"
        animate="visible"
        variants={parentVariants}
        className="grid grid-cols-2 gap-3 gap-y-5"
      >
        {products.map((prd) => (
          <m.div key={prd._id} variants={childrenVariants}>
            <Product product={prd} />
          </m.div>
        ))}
      </m.div>
    </div>
  );
}
