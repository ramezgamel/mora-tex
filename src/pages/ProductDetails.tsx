import { useState } from "react";
import { ProductInterface } from "../types/Product";

function ProductDetails() {
  const product: ProductInterface = {
    _id: "as5a64sd",
    name: "T-shirt round",
    price: 12.5,
    images: [
      "https://placehold.co/500x500/yellow/black",
      "https://placehold.co/500x500/green/white",
      "https://placehold.co/500x500/blue/white",
      "https://placehold.co/500x500/violet/white",
      "https://placehold.co/500x500/black/white",
      "https://placehold.co/500x500/red/white",
    ],
    size: ["l", "xl", "2xl"],
    colors: ["red", "black"],
    description: "asdsf",
    discount: 13,
  };
  const [preview, setPreview] = useState<string>(product.images[0]);

  return (
    <div className="mt-3">
      <h1 className="text-center mb-2 text-xl font-bold text-blue-700 underline underline-offset-4">
        {product.name}
      </h1>
      <img className="h-72 w-full object-fill" src={preview} alt="" />
      <div className="flex pt-4 gap-2 overflow-hidden">
        {product.images.map((img) => (
          <img
            onClick={() => setPreview(img)}
            className={`hover:blur-none w-16 hover:-translate-y-2 transition-all duration-300 ${
              img !== preview ? "blur-[1px]" : "-translate-y-2"
            }`}
            src={img}
          />
        ))}
      </div>
      <div className="my-2 shadow-md">
        price: <span>{product.price}</span>
      </div>
      <button className="btn">Add to cart</button>
    </div>
  );
}

export default ProductDetails;
