import { ProductType } from "../types/Product";
import apiSlice from "./apiSlice";
type getProductsType = {
  success: boolean;
  data: ProductType[];
};
const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<getProductsType, void>({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    getProduct: builder.query<{ product: ProductType }, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productApi;
