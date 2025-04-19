import { useNavigate } from "react-router";

const PrimaryButton = ({ redirectTo, text }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(redirectTo)}
      className="text-light active:bg-activeBorder active:text-dark mt-4 w-full cursor-pointer self-end bg-black px-5 py-3 text-sm font-semibold uppercase transition sm:w-60"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
