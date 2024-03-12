import { AnimatePresence, motion as m } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Carousel() {
  const [view, setView] = useState<number>(0);
  const products = useMemo(
    () => [
      {
        _id: "as5ax64sd",
        name: "T-shirt round",
        price: 12.5,
        images: ["https://placehold.co/600x270/orange/white", "as"],
        size: ["l", "xl", "2xl"],
        colors: ["red", "black"],
        description: "asdsf",
        discount: 13,
      },
      {
        _id: "as5a6q4sd",
        name: "T-shirt round",
        price: 12.5,
        images: ["https://placehold.co/600x270/red/white", "as"],
        size: ["l", "xl", "2xl"],
        colors: ["red", "black"],
        description: "asdsf",
        discount: 13,
      },
    ],
    []
  );
  useEffect(() => {
    const interval = setInterval(() => {
      if (view == products?.length - 1) {
        setView(0);
      } else {
        setView((prev) => prev + 1);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [products, view]);
  const prev = () => {
    setView((curr) => (curr === 0 ? products.length - 1 : curr - 1));
  };
  const next = () => {
    setView((curr) => (curr === products.length - 1 ? 0 : curr + 1));
  };
  return (
    <div className="relative overflow-hidden mb-10 mt-2 ">
      {/* <!-- Carousel wrapper --> */}
      <AnimatePresence mode="wait">
        <m.div
          key={view}
          initial={{ x: "-100%" }}
          animate={{ x: 0, opacity: ["10%", "30%", "100%"] }}
          exit={{ x: "100%", opacity: ["70%", "30%", "10%"] }}
          transition={{
            duration: 0.5,
          }}
          className="h-60"
        >
          <img
            className="w-full h-full object-cover"
            src={products[view].images[0]}
          />
        </m.div>
      </AnimatePresence>
      {/* <!-- Slider controls --> */}
      <div className="absolute inset-0 flex justify-between items-center p-4">
        <button
          type="button"
          className="hover:scale-150 transition-all"
          onClick={prev}
        >
          <IoIosArrowBack className="w-7 h-7 text-black hover:text-blue-700" />
        </button>
        <button
          type="button"
          onClick={next}
          className="hover:scale-150 transition-all"
        >
          <IoIosArrowForward className="w-7 h-7 text-black hover:text-blue-700" />
        </button>
      </div>
      {/* <!-- Slider indicators --> */}
      <div className="absolute w-full left-0 bottom-2 text-center">
        <div className="flex justify-center items-center gap-2">
          {products?.map((prd, index) => (
            <button
              key={prd._id}
              type="button"
              className={`${
                view == index ? "p-2" : "opacity-50"
              } h-3 w-3 rounded-full transition-all bg-black`}
              onClick={() => setView(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
