import { FiShoppingCart } from "react-icons/fi";
import Modal from "./Modal";
import Stagger from "../animation/Stagger";
import { useState } from "react";
export default function CartPanel() {
  const [open, setOpen] = useState<boolean>(false);
  const products = [
    {
      _id: "as5a64sd",
      name: "T-shirt round",
      price: 12.5,
      images: ["https://placehold.co/500", "as"],
      size: ["l", "xl", "2xl"],
      colors: ["red", "black"],
      description: "asdsf",
      discount: 13,
      qty: 2,
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
      qty: 5,
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
      qty: 4,
    },
  ];
  return (
    <>
      <Modal title="Shopping cart" open={open} onClose={() => setOpen(false)}>
        <Stagger products={products} />
        <div className="mt-2 font-bold text-center">
          Total:{" "}
          {products
            .reduce((_prev, curr, acc) => curr.qty * curr.price + acc, 0)
            .toFixed(2)}{" "}
          EGP
        </div>
      </Modal>
      <button onClick={() => setOpen(true)} className="relative">
        <span className="absolute -top-2 -right-2 border-2 border-white bg-red-500 text-white rounded-full text-xs w-5 h-5">
          {products.length}
        </span>
        <FiShoppingCart className="w-6 h-6" />
      </button>
    </>
  );
}
