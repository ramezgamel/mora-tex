import { ProductType } from "../types/Product";
import CartType from "../types/Cart";
function calcTotal(cart: CartType) {
  return cart.products.reduce((acc, curr) => curr.price * curr.qty! + acc, 0);
}
export default function updateCart(cart: CartType, product: ProductType) {
  cart.products = cart.products.map((prd) =>
    prd._id == product._id ? product : prd
  );
  cart.total = calcTotal(cart);
  return cart;
}
