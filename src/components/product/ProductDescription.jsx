const ProductDescription = () => {
  return (
    <div>
      <div className="flex text-sm">
        <p className="border-borderColor2 border px-5 py-3 font-semibold">
          Description
        </p>
        <p className="border-borderColor2 border px-5 py-3">Reviews (122)</p>
      </div>
      <div className="border-borderColor2 text-greyExtraLight flex flex-col gap-3 border p-6 text-sm">
        <p>
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where businesses and individuals can
          showcase their products, interact with customers, and conduct
          transactions without the need for a physical presence. E-commerce
          websites have gained immense popularity due to their convenience,
          accessibility, and the global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors). Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
