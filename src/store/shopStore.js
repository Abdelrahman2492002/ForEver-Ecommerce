import { create } from "zustand";

const shopStore = (set) => ({
  currency: "$",
  products: [],
  setProducts: (allProducts) => set({ products: allProducts }),
  searchText: "",
  setSearchText: (text) => set({ searchText: text }),
  showSearch: true,
  toggleShowSearch: () => set((state) => ({ showSearch: !state.showSearch })),
  closeSearch: () => set({ showSearch: false }),
});

export const useShopStore = create(shopStore);
