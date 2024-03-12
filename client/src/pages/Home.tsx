import Carousel from "../components/Carousel";
import Product from "../components/Product";
import { motion as m } from "framer-motion";
import { childrenVariants, parentVariants } from "../animation/Stagger";
import { useGetProductsQuery } from "../store/productApiSlice";
import { ProductType } from "../types/Product";
export default function Home() {
  const { data } = useGetProductsQuery();
  return (
    <div>
      <Carousel />
      <m.div
        initial="hidden"
        animate="visible"
        variants={parentVariants}
        className="grid grid-cols-2 gap-3 gap-y-5"
      >
        {data?.data.map((prd: ProductType) => (
          <m.div key={prd._id} variants={childrenVariants}>
            <Product product={prd} />
          </m.div>
        ))}
      </m.div>
    </div>
  );
}
