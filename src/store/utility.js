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

export const generateCartProductList = (cartItems) => {
  const tempData = [];

  for (const items in cartItems) {
    for (const item in cartItems[items]) {
      if (cartItems[items][item] > 0) {
        tempData.push({
          _id: items,
          size: item,
          quantity: cartItems[items][item],
        });
      }
    }
  }
  return tempData;
};

export const updateQuantity = (items, productId, size, quantity) => {
  const copyItems = structuredClone(items);
  copyItems[productId][size] = quantity;
  return copyItems;
};

export const countCartAmount = (cartItems, products) => {
  let totalAmount = 0;
  for (const items in cartItems) {
    const product = products.find((item) => item._id === items);
    for (const item in cartItems[items]) {
      if (cartItems[items][item] > 0) {
        totalAmount += cartItems[items][item] * product.price;
      }
    }
  }

  return totalAmount;
};
