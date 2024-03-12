import { FiShoppingCart } from "react-icons/fi";
import Modal from "./Modal";
import Stagger from "../animation/Stagger";
import { useState } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../store/store";
export default function CartPanel() {
  const [open, setOpen] = useState<boolean>(false);
  const cart = useSelector((state: IRootState) => state.cart);
  return (
    <>
      <Modal title="عربه التسوق" open={open} onClose={() => setOpen(false)}>
        {cart.products.length >= 1 ? (
          <div>
            <Stagger products={cart.products} />
            <div className="mt-2 font-bold text-center">
              الاجمالى:{cart.total} جنيه
            </div>
          </div>
        ) : (
          <div className="alert">لا توجد منتجات</div>
        )}
      </Modal>
      <button onClick={() => setOpen(true)} className="relative">
        <span className="absolute -top-2 -right-2 border-2 border-white bg-red-500 text-white rounded-full text-xs w-5 h-5">
          {cart.products.length}
        </span>
        <FiShoppingCart className="w-6 h-6" />
      </button>
    </>
  );
}
