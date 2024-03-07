import { SetStateAction, useState } from "react";
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
  const [size, setSize] = useState<string>("");
  const [qty, setQty] = useState<number>();
  const [preview, setPreview] = useState<string>(product.images[0]);
  const sizeChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSize(e.target.value);
  };
  return (
    <div className="mt-3">
      <h1 className="text-center mb-2 text-xl font-bold text-blue-700 underline underline-offset-4">
        {product.name}
      </h1>
      <img className="h-72 w-full object-fill" src={preview} alt="" />
      <div className="flex border-b pb-2 pt-4 gap-2 overflow-hidden">
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
      <div className="my-2 p-2 shadow-md">
        <p className="flex justify-between">
          <span className="font-bold text-l">Price:</span>{" "}
          <span>{product.price} EGP</span>
        </p>
        <p className="flex gap-2 my-2 justify-between">
          <span className="font-bold text-l">Sizes:</span>
          <div className="flex gap-2 ">
            {product.size.map((s) => (
              <div
                className={`border w-fit rounded-lg  hover:bg-blue-500 hover:text-white ${
                  size == s && "bg-blue-700 text-white"
                }`}
              >
                <label
                  className="block w-7 text-center cursor-pointer"
                  htmlFor={s}
                >
                  {s}
                </label>
                <input
                  onChange={sizeChange}
                  className="hidden w-full h-full"
                  id={s}
                  type="checkbox"
                  name="size"
                  value={s}
                />
              </div>
            ))}
          </div>
        </p>
        <p>
          <span className="font-bold text-l mr-2">Description:</span>
          {product.description}
        </p>
        <p className="flex justify-between my-2">
          <span className="font-bold text-l">Quantity:</span>
          <input
            onChange={(e) => setQty(+e.target.value)}
            type="number"
            className="border-2 rounded-lg w-24 focus:outline-blue-500"
          />
        </p>
        <hr />
        {qty !== 0 && (
          <p className="flex justify-between p-2 bg-gray-400">
            <strong>Total:</strong>
            {qty! * product.price}
          </p>
        )}
      </div>
      <button className="btn">Add to cart</button>
    </div>
  );
}

export default ProductDetails;
