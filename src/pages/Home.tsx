import Carousel from "../components/Carousel";
import Product from "../components/Product";
import { ProductInterface } from "../types/Product";

export default function Home() {
  const products: ProductInterface[] = [
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
      <div className="grid grid-cols-2 gap-3 gap-y-5">
        {products.map((prd) => (
          <Product product={prd} key={prd._id} />
        ))}
        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
      </div>
    </div>
  );
}
