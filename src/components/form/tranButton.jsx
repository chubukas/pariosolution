const TransButton = ({ name, onclick }) => {
  return (
    <button
      onClick={onclick}
      className="border-none text-center text-[#4E598C] py-2 text-xs font-semibold"
    >
      {name}
    </button>
  );
};

export default TransButton;
