import { AnimationProps, motion as m } from "framer-motion";
import { ProductType } from "../types/Product";
import { CiTrash } from "react-icons/ci";

export const parentVariants: AnimationProps["variants"] = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 100,
    transition: {
      duration: 0.01,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};
export const childrenVariants: AnimationProps["variants"] = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 100,
    transition: {
      duration: 0.2,
    },
  },
};
type StaggerProps = {
  products: ProductType[];
};
export default function Stagger({ products }: StaggerProps) {
  return (
    <m.div
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className="space-y-2 overflow-hidden"
    >
      {products.map((prd) => {
        return (
          <m.div
            key={prd._id}
            variants={childrenVariants}
            className="flex items-center gap-1 border px-2 py-1 rounded-lg hover:!text-white hover:bg-blue-600 hover:cursor-pointer"
          >
            <img src={prd.images[0]} className="w-11" />
            <div className="min-w-36 max-w-36">
              <h4>{prd.name}</h4>
              <p className="text-sm truncate  text-gray-600">
                {prd.description}
              </p>
            </div>
            <div className="flex justify-end gap-2">
              {prd.qty && <span>{prd.qty} x</span>}
              <span>{prd.price}</span>
            </div>
            <button className="bg-red-500 ml-1 py-1 px-2 rounded-md hover:bg-red-400">
              <CiTrash className="text-white bolder" />
            </button>
          </m.div>
        );
      })}
    </m.div>
  );
}
