import { useState, useEffect } from "react";

import Input from "./form/input";
import { nigeriaState } from "../data/nigeriaStates";
import Select from "./form/select";
import BgButton from "./form/bgbutton";
import TransButton from "./form/tranButton";
import { useAppContext } from "../context";
import { ACTIVE, INPUTDATA, CANCELPAYMENT } from "../context/types";
import { formTypes } from "./form/formTypes";

const PersonalInfo = () => {
  const [appState, dispatch] = useAppContext();

  const { dataInputs } = appState;

  const [inputs, setInputs] = useState({
    name: "",
    emailaddress: "",
    address1: "",
    address2: "",
    localgovernment: "",
    state: "",
  });

  useEffect(() => {
    setInputs({
      name: dataInputs.name,
      emailaddress: dataInputs.emailaddress,
      address1: dataInputs.address1,
      address2: dataInputs.address2,
      localgovernment: dataInputs.localgovernment,
      state: dataInputs.state,
    });
  }, [dataInputs]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onNext = () => {
    dispatch({ type: INPUTDATA, payload: { ...inputs } });
    dispatch({ type: ACTIVE, payload: formTypes.BILLINGINFO });
  };

  return (
    <div className="mb-12">
      <div className="mb-6">
        <Input
          onChange={onInputChange}
          name="Name"
          placeholder="Opara Linus Ahmed"
          type="text"
          value={inputs.name}
        />
      </div>
      <div className="mb-6">
        <Input
          onChange={onInputChange}
          name="Email Address"
          placeholder="OparaLinusAhmed@devmail.com"
          type="email"
          required
          value={inputs.emailaddress}
        />
      </div>
      <div className="mb-6">
        <Input
          onChange={onInputChange}
          name="Address 1"
          placeholder="The address of the user goes here"
          type="address"
          value={inputs.address1}
        />
      </div>
      <div className="mb-6">
        <Input
          onChange={onInputChange}
          name="Address 2"
          placeholder="and here"
          type="address"
          value={inputs.address2}
        />
      </div>
      <div className="mb-6 grid md:grid-cols-3 gap-x-4">
        <div className="md:col-span-2">
          <Input
            onChange={onInputChange}
            name="Local Government"
            placeholder="Surulere"
            type="address"
            value={inputs.localgovernment}
          />
        </div>
        <div className="mt-6 md:mt-0">
          <Select
            onChange={onInputChange}
            name="State"
            selectData={nigeriaState}
            value={inputs.state}
          />
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

export default PersonalInfo;
