import { BiCartAdd } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { ProductInterface } from "../types/Product";
import { Link } from "react-router-dom";
type productProps = {
  product: ProductInterface;
};
const Product = ({ product }: productProps) => {
  return (
    <div className="relative shadow-md pb-1 transition-all hover:scale-105 hover:cursor-pointer">
      <span className="absolute top-2 right-2">
        <CiHeart className="text-red-700 w-7 h-7" />
      </span>
      <Link to={`product/${product._id}`}>
        <img src={product.images[0]} alt={product.name} />
        <div className="px-2 py-1">
          <h4>{product.name}</h4>
          <p className="text-slate-500">{product.description}</p>
          <span className="text-yellow-600">
            {product.price.toFixed(2)} EGP
            {product?.discount && (
              <span className="text-red-700 border border-red-700 ml-3 px-1">
                {product.discount}%
              </span>
            )}
          </span>
        </div>
      </Link>
      <button className="hover:bg-blue-700 hover:text-white hover:border-blue-700 border border-black rounded-xl flex justify-center gap-2 items-center px-4 mt-1 py-1 w-full">
        Add to cart
        <BiCartAdd className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Product;
