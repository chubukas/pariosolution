const BgButton = ({ name, onclick }) => {
  return (
    <button
      onClick={onclick}
      className="btn_bg border-none rounded-md text-center text-white py-2 px-12 text-xs font-semibold"
    >
      {name}
    </button>
  );
};

export default BgButton;
