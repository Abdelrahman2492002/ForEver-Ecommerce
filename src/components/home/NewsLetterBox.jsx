import SectionParagraph from "../common/SectionParagraph";

const NewsLetterBox = () => {
  const onSubmitHandler = (e) => e.preventDefault();

  return (
    <div className="mx-7 pt-5 pb-20 sm:mx-24 lg:mx-44">
      <h2 className="text-greyDark pt-20 text-center text-3xl font-medium">
        Subscribe now & get 20% off
      </h2>
      <SectionParagraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      <form
        onSubmit={onSubmitHandler}
        className="mx-auto mt-11 mb-20 flex w-full items-center sm:w-3/4"
      >
        <input
          placeholder="Enter your email id"
          className="border-borderColor2 w-full flex-1 border px-5 py-3 outline-0 placeholder:text-sm"
        />
        <button className="text-light cursor-pointer border border-black bg-black px-5 py-3">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
