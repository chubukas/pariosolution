import BgButton from "./form/bgbutton";
import TransButton from "./form/tranButton";

const ConfirmPayment = () => {
  const onNext = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="w-full shadow-md pb-3 rounded-md">
        <table className="min-w-full text-left rounded-md">
          <thead className="bg-[#2F80ED]">
            <tr>
              <th
                scope="col"
                className="text-xs font-semibold text-white  px-6 py-4"
              >
                Item Name
              </th>
              <th
                scope="col"
                className="text-xs font-semibold text-white  px-6 py-4"
              >
                ₦ Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-xs  text-[#4E598C]">
                Data science and usability
              </td>
              <td className="text-xs text-[#4E598C] font-semibold px-6 py-4 whitespace-nowrap">
                50,000.00
              </td>
            </tr>
            <tr className="bg-white">
              <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-[#4E598C]">
                Shipping
              </td>
              <td className="text-xs text-black font-light px-6 py-4 whitespace-nowrap">
                0.00
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mx-5 border-b  border-[#817E9E]"></div>
        <div className="mx-7 border-2 p-2 rounded-md flex justify-between my-5 text-[12px]">
          <div>Total</div>
          <div className="font-semibold text-[#4E598C]">
            <p className="pr-14">50,000.00</p>
          </div>
        </div>
      </div>
      <div className="mt-12 flex gap-x-16">
        <div>
          <BgButton name="Pay" onclick={onNext} />
        </div>
        <div>
          <TransButton name="Cancel Payment" onclick={onNext} />
        </div>
      </div>
    </div>
  );
};

export default ConfirmPayment;
