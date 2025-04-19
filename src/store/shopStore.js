import { create } from "zustand";
import { addToCart, getCartItemsCount, updateQuantity } from "./utility";

const shopStore = (set, get) => ({
  currency: "$",
  delivery__fee: 10,
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
  updateCartQuantity: (productId, size, quantity) =>
    set((state) => ({
      cartItems: updateQuantity(state.cartItems, productId, size, quantity),
    })),
});

export const useShopStore = create(shopStore);
