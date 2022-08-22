import { useState, useEffect } from "react";

import Input from "./form/input";
import Select from "./form/select";
import { cards } from "../data/cards";
import BgButton from "./form/bgbutton";
import TransButton from "./form/tranButton";
import { useAppContext } from "../context";
import { ACTIVE, INPUTDATA, CANCELPAYMENT } from "../context/types";
import { formTypes } from "./form/formTypes";

const BillingInfo = () => {
  const [appState, dispatch] = useAppContext();

  const { dataInputs } = appState;

  const [inputs, setInputs] = useState({
    nameoncard: "",
    cardtype: "",
    carddetails: "",
    expirydate: "",
    cvv: "",
  });

  useEffect(() => {
    setInputs({
      nameoncard: dataInputs.nameoncard,
      cardtype: dataInputs.cardtype,
      carddetails: dataInputs.carddetails,
      expirydate: dataInputs.expirydate,
      cvv: dataInputs.cvv,
    });
  }, [dataInputs]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onNext = () => {
    dispatch({ type: INPUTDATA, payload: { ...inputs } });
    dispatch({ type: ACTIVE, payload: formTypes.CONFIRMPAYMENT });
  };
  return (
    <div className="mb-12">
      <div className="mb-6">
        <Input
          onChange={onInputChange}
          name="Name on Card"
          placeholder="Opara Linus Ahmed"
          type="text"
          required
          value={inputs.nameoncard}
        />
      </div>
      <div className="mt-6">
        <Select
          onChange={onInputChange}
          name="Card Type"
          selectData={cards}
          required
          value={inputs.cardtype}
        />
      </div>
      <div className="mt-6 grid xl:grid-cols-5 gap-x-3">
        <div className="xl:col-span-3">
          <Input
            onChange={onInputChange}
            name="Card details"
            placeholder="44960 44960 44960 44960"
            type="text"
            required
            value={inputs.carddetails}
          />
        </div>

        <div className="xl:col-span-2 grid grid-cols-2 gap-x-3">
          <div className="text-center mt-6 xl:mt-0">
            <Input
              onChange={onInputChange}
              name="Expiry date"
              placeholder="04 / 23"
              type="text"
              required
              value={inputs.expirydate}
            />
          </div>
          <div className="text-center mt-6 xl:mt-0">
            <Input
              onChange={onInputChange}
              name="CVV"
              placeholder="923"
              type="text"
              required
              value={inputs.cvv}
            />
          </div>
        </div>
      </div>
      <div className="mt-12 flex gap-x-16">
        <div>
          <BgButton name="Next" onclick={onNext} />
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

export default BillingInfo;
