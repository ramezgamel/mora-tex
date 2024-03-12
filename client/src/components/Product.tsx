import { BiCartAdd } from "react-icons/bi";
import { CiHeart, CiTrash } from "react-icons/ci";
import { ProductType } from "../types/Product";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, removeFromFav } from "../store/favSlice";
import { IRootState } from "../store/store";
import { FaHeart } from "react-icons/fa";
import { addToCart, removeFromCart } from "../store/cartSlice";
import { ChangeEvent, useState } from "react";

type productProps = {
  product: ProductType;
};
const Product = ({ product }: productProps) => {
  const [qty, setQty] = useState<number>(1);
  const dispatch = useDispatch();
  const productsFav = useSelector((state: IRootState) => state.favorite);
  const cartProducts = useSelector((state: IRootState) => state.cart.products);
  const isInFavorite = productsFav.some((prd) => prd._id == product._id);
  const isInCart = cartProducts.some((prd) => prd._id == product._id);
  const changeQty = (e: ChangeEvent<HTMLInputElement>) => {
    let qty = +e.target.value;
    if (qty == 0) qty = 1;
    setQty(qty);
    dispatch(addToCart({ qty, ...product }));
  };
  return (
    <div className="relative shadow-md pb-1 transition-all hover:scale-105 hover:cursor-pointer">
      <div className="absolute top-2 text-red-500 right-2 hover:scale-110 hover:text-red-700">
        {isInFavorite ? (
          <button onClick={() => dispatch(removeFromFav(product))}>
            <FaHeart className="w-5 h-5" />
          </button>
        ) : (
          <button onClick={() => dispatch(addToFav(product))}>
            <CiHeart className="w-7 h-7" />
          </button>
        )}
      </div>
      <Link to={`product/${product._id}`}>
        <img src={product.images[0]} alt={product.name} />
        <div className="px-2 py-1">
          <h4>{product.name}</h4>
          <p className="text-slate-500">{product.description}</p>
          <span className="text-yellow-600">
            {product.price.toFixed(2)} جنيه
            {product?.discount && (
              <span className="text-red-700 border border-red-700 mr-3 px-1">
                {product.discount}%
              </span>
            )}
          </span>
        </div>
      </Link>
      <div className="mt-1 py-1 px-4 ">
        {isInCart ? (
          <div className="flex justify-between gap-1">
            <button
              onClick={() => dispatch(removeFromCart(product))}
              className="bg-red-500 ml-1 py-1 px-2 rounded-md hover:bg-red-400"
            >
              <CiTrash className="text-white bolder" />
            </button>
            <div className="relative">
              <span className="max-[320px]:hidden absolute text-slate-500 left-3">
                قطعه
              </span>
              <input
                onChange={changeQty}
                className="max-[320px]:w-16 w-[100%] border pr-2 rounded-md ring-1 focus:outline-none"
                type="number"
                value={qty}
              />
            </div>
          </div>
        ) : (
          <button
            onClick={() => dispatch(addToCart({ qty, ...product }))}
            className="hover:bg-blue-700 hover:text-white hover:border-blue-700 border border-black rounded-xl flex justify-center gap-2 items-center w-full"
          >
            اضف للعربه
            <BiCartAdd className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
