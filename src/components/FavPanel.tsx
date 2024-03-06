import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import Modal from "./Modal";
import Stagger from "../animation/Stagger";
export default function FavPanel() {
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
    <>
      <Modal title="Favorite Items" open={open} onClose={() => setOpen(false)}>
        <Stagger products={products} />
      </Modal>
      <button className="relative" onClick={() => setOpen(true)}>
        <span className="absolute -top-2 -right-2 border-2 border-white bg-red-500 text-white rounded-full text-xs w-5 h-5">
          {products.length}
        </span>
        <CiHeart className="w-6 h-6" />
      </button>
    </>
  );
}
