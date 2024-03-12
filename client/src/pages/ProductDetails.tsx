import { ChangeEvent, useState } from "react";
import { ProductType } from "../types/Product";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { useGetProductQuery } from "../store/productApiSlice";

function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading } = useGetProductQuery(id!);
  const [size, setSize] = useState<string>("");
  const [qty, setQty] = useState<number>(() => {
    let value = 0;
    const localStorageValue = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")!)
      : 0;
    if (localStorageValue)
      localStorageValue.products.map((prd: ProductType) => {
        if (prd._id == id && prd.qty) {
          value = +prd.qty!;
        }
      });
    return value;
  });
  const [preview, setPreview] = useState<string>(
    data?.product ? data?.product.images[0] : ""
  );
  const dispatch = useDispatch();
  const sizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSize(e.target.value);
  };
  const changeQty = (e: ChangeEvent<HTMLInputElement>) => {
    let qty = +e.target.value;
    if (qty == 0) qty = 1;
    setQty(qty);
  };
  if (isLoading) return <div>انتظر من فضلك</div>;
  return (
    <>
      {data?.product && (
        <div className="mt-3">
          <h1 className="text-center mb-2 text-xl font-bold text-blue-700 underline underline-offset-4">
            {data?.product.name}
          </h1>
          <img className="h-72 w-full object-fill" src={preview} alt="" />
          <div className="flex border-b pb-2 pt-4 gap-2 overflow-hidden">
            {data?.product.images &&
              data?.product.images.map((img: string) => (
                <img
                  key={img}
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
              <span className="font-bold text-l ">السعر:</span>{" "}
              <span>{data?.product.price} جنيه مصرى</span>
            </p>
            <p className="flex gap-2 my-2 justify-between">
              <span className="font-bold text-l">المقاسات:</span>
              <div className="flex gap-2 ">
                {data?.product.size.map((s: string) => (
                  <div
                    key={s}
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
            <p className="flex justify-between">
              <span className="font-bold text-l ">الوصف:</span>
              {data?.product.description}
            </p>
            <p className="flex justify-between my-2">
              <span className="font-bold text-l">الكميه:</span>
              <div className="relative">
                <span className="absolute left-2 top-0 text-slate-500">
                  قطعه
                </span>
                <input
                  onChange={changeQty}
                  value={qty}
                  type="number"
                  className="border-2 pr-2 ring-1 rounded-lg w-24 focus:outline-blue-500"
                />
              </div>
            </p>
            <hr />
            {qty !== 0 && (
              <p className="flex justify-between p-2 bg-gray-400">
                <strong>الاجمالى:</strong>
                {qty! * data?.product.price} جنيه
              </p>
            )}
          </div>
          <button
            className="btn"
            onClick={() => dispatch(addToCart({ qty, ...data?.product }))}
          >
            اضف للعربه
          </button>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
