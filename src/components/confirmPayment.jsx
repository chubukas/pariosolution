import BgButton from "./form/bgbutton";
import TransButton from "./form/tranButton";
import { useAppContext } from "../context";
import { COMPLETED, CANCELPAYMENT } from "../context/types";

const ConfirmPayment = () => {
  const [, dispatch] = useAppContext();

  return (
    <div>
      <div className="w-full shadow-md pb-3 rounded-md bg-white">
        <table className="min-w-full text-left">
          <thead className="bg-[#2F80ED]">
            <tr>
              <th
                scope="col"
                className="text-xs font-semibold text-white  px-8 py-4 rounded-tl-md"
              >
                Item Name
              </th>
              <th
                scope="col"
                className="text-xs font-semibold text-white  px-8 py-4 rounded-tr-md"
              >
                ₦ Price
              </th>
            </tr>
          </thead>
          <tbody className="text-[11px]">
            <tr>
              <td className="px-8 py-4 whitespace-nowrap  text-[#4E598C]">
                Data science and usability
              </td>
              <td className=" text-[#4E598C] font-medium px-8 py-4 whitespace-nowrap">
                50,000.00
              </td>
            </tr>
            <tr className="bg-white">
              <td className="px-8 py-4 whitespace-nowrap text-[#4E598C]">
                Shipping
              </td>
              <td className="text-black font-medium px-8 py-4 whitespace-nowrap">
                0.00
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mx-5 border-b  border-[#817E9E]"></div>
        <div className="mx-7 border-2 p-2 rounded-md flex justify-between my-5 text-[10px] text-[#817E9E]">
          <div>Total</div>
          <div className="font-semibold text-[#4E598C] text-[10px]">
            <p className="pr-14">50,000.00</p>
          </div>
        </div>
      </div>
      <div className="mt-12 flex gap-x-16">
        <div>
          <BgButton
            name="Pay"
            onclick={() => dispatch({ type: COMPLETED, payload: true })}
          />
        </div>
        <div>
          <TransButton
            name="Cancel Payment"
            onclick={() => dispatch({ type: CANCELPAYMENT })}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmPayment;
