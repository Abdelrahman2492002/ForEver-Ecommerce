const OurPolicyCard = ({ image, title, text }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={image} alt="" className="w-12" />
      <h3 className="text-greyDark pt-6 pb-2 text-lg font-semibold">{title}</h3>
      <p className="text-greyLight">{text}</p>
    </div>
  );
};

export default OurPolicyCard;
