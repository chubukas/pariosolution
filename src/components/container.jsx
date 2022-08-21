import NavChange from "./navChange";
import PersonalInfo from "./personalInfo";
import BillingInfo from "./billingInfo";
import ConfirmPayment from "./confirmPayment";
import { formTypes } from "./form/formTypes";
import { useAppContext } from "../context";

const Container = () => {
  const [appState] = useAppContext();
  const { active } = appState;

  const activeForm =
    formTypes.BILLINGINFO === active ? (
      <div className="mt-10">
        <BillingInfo />
      </div>
    ) : formTypes.CONFIRMPAYMENT === active ? (
      <div className="mt-10">
        <ConfirmPayment />
      </div>
    ) : formTypes.PERSONALINFO === active ? (
      <div className="mt-10">
        <PersonalInfo />
      </div>
    ) : (
      ""
    );

  return (
    <div className="mt-28 md:mx-auto mx-6 md:w-4/12">
      <div className="mb-8">
        <p className=" font-semibold text-xl text-[#4E598C]">
          Complete your Purchase
        </p>
      </div>
      <NavChange />
      {activeForm}
    </div>
  );
};

export default Container;
