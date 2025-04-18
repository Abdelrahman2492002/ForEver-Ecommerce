import { create } from "zustand";
import { addToCart, getCartItemsCount } from "./utility";

const shopStore = (set, get) => ({
  currency: "$",
  products: [],
  setProducts: (allProducts) => set({ products: allProducts }),
  searchText: "",
  setSearchText: (text) => set({ searchText: text }),
  showSearch: true,
  toggleShowSearch: () => set((state) => ({ showSearch: !state.showSearch })),
  closeSearch: () => set({ showSearch: false }),
  cartItems: {},
  addToCart: (productId, size) =>
    set((state) => ({
      cartItems: addToCart(state.cartItems, productId, size),
    })),

  cartItemsCount: () => getCartItemsCount(get().cartItems),
});

export const useShopStore = create(shopStore);
