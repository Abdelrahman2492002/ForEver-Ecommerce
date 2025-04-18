import { toast } from "react-toastify";

export const addToCart = (items, productId, size) => {
  if (!size) {
    toast.error("Select Product Size");
    return;
  }
  const copyItems = structuredClone(items);

  if (copyItems[productId]) {
    if (copyItems[productId][size]) {
      copyItems[productId][size] += 1;
    } else {
      copyItems[productId][size] = 1;
    }
  } else {
    copyItems[productId] = {};
    copyItems[productId][size] = 1;
  }

  return copyItems;
};

export const getCartItemsCount = (cartItems) => {
  console.log(cartItems);
  let count = 0;
  for (const items in cartItems) {
    for (const item in cartItems[items]) {
      if (cartItems[items][item] > 0) {
        count += cartItems[items][item];
      }
    }
  }
  return count;
};
