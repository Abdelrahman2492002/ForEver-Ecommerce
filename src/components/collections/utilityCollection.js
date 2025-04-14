export const toggleCategory = (array, item) => {
  if (array.includes(item)) {
    return array.filter((element) => element !== item);
  } else {
    return [...array, item];
  }
};

export const filterProducts = (products, category, subCategory) => {
  let filtered = [...products];
  if (category.length > 0) {
    filtered = filtered.filter((item) => category.includes(item.category));
  }
  if (subCategory.length > 0) {
    filtered = filtered.filter((item) =>
      subCategory.includes(item.subCategory),
    );
  }

  return filtered;
};

export const orderProducts = (products, order) => {
  let sorted = [...products];
  switch (order) {
    case "low-high":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "high-low":
      sorted.sort((a, b) => b.price - a.price);
      break;
    default:
      sorted;
  }
  return sorted;
};
