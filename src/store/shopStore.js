import { create } from "zustand";

const shopStore = (set) => ({
  products: [],
  currency: "$",
  setProducts: (allProducts) => set({ products: allProducts }),
});

export const useShopStore = create(shopStore);
