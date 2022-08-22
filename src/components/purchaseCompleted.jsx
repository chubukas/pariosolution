import good from "../images/Vector.png";
import { useAppContext } from "../context";
import { ACTIVE, COMPLETED } from "../context/types";
import { formTypes } from "./form/formTypes";

const PurchaseCompleted = () => {
  const [, dispatch] = useAppContext();

  const returnHome = () => {
    dispatch({ type: COMPLETED, payload: false });
    dispatch({ type: ACTIVE, payload: formTypes.PERSONALINFO });
  };

  return (
    <div className="mt-32 md:mx-auto mx-6 md:w-4/12 bg-white shadow-md p-8 rounded-md">
      <div className="text-center md:w-10/12 mx-auto">
        <div className="rounded-full shadow-md w-12 mx-auto p-4">
          <img src={good} alt="mark" className="w-8" />
        </div>
        <div className="text-[#4E598C] text-base md:text-xl font-semibold my-3">
          <p>Purchase Completed</p>
        </div>
        <div className="md:ml-16 ml-14 font-medium">
          <div className="text-[#4F4F4F] text-[10px] text-left w-10/12">
            <p>
              Please check your email for details concerning this transaction
            </p>
          </div>
          <div
            onClick={returnHome}
            className="text-[#F2C94C] underline text-left text-[10px] my-3"
          >
            <p className="cursor-pointer">Return Home </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCompleted;
