const NavChange = () => {
  return (
    <div className="border-b border-black text-sm md:text-base md:font-semibold text-[#BDBDBD]">
      <div className="flex justify-between pb-3">
        <div className="cursor-pointer relative">
          <p>Personal Info</p>
          <p className="border-b-8 border-[#F2994A] rounded-lg absolute -bottom-4 w-full"></p>
        </div>
        <div className="mx-12 cursor-pointer">Billing Info</div>
        <div className="cursor-pointer">Comfirm Payment</div>
      </div>
    </div>
  );
};

export default NavChange;
