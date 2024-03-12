import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import Modal from "./Modal";
import Stagger from "../animation/Stagger";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../store/store";
import { emptyFav } from "../store/favSlice";
export default function FavPanel() {
  const [open, setOpen] = useState<boolean>(false);
  const products = useSelector((state: IRootState) => state.favorite);
  const dispatch = useDispatch();
  return (
    <>
      <Modal title="المفضله" open={open} onClose={() => setOpen(false)}>
        {products.length >= 1 ? (
          <div>
            <Stagger products={products} />
            <button
              onClick={() => dispatch(emptyFav())}
              className="btn mt-2 bg-red-500 hover:bg-red-700"
            >
              امسح الكل
            </button>
          </div>
        ) : (
          <div className="alert">لا توجد منتجات</div>
        )}
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
