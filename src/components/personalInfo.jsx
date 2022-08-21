import Input from "./form/input";
import { nigeriaState } from "../data/nigeriaStates";
import Select from "./form/select";
import BgButton from "./form/bgbutton";
import TransButton from "./form/tranButton";

const PersonalInfo = () => {
  const onInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };

  const onNext = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mb-12">
      <div className="mb-6">
        <Input
          onChange={onInputChange}
          name="Name"
          placeholder="Opara Linus Ahmed"
          type="text"
        />
      </div>
      <div className="mb-6">
        <Input
          onChange={onInputChange}
          name="Email Address"
          placeholder="OparaLinusAhmed@devmail.com"
          type="email"
          required
        />
      </div>
      <div className="mb-6">
        <Input
          onChange={onInputChange}
          name="Address 1"
          placeholder="The address of the user goes here"
          type="address"
        />
      </div>
      <div className="mb-6">
        <Input
          onChange={onInputChange}
          name="Address 2"
          placeholder="and here"
          type="address"
        />
      </div>
      <div className="mb-6 grid md:grid-cols-3 gap-x-4">
        <div className="md:col-span-2">
          <Input
            onChange={onInputChange}
            name="Local Government"
            placeholder="Surulere"
            type="address"
          />
        </div>
        <div className="mt-6 md:mt-0">
          <Select
            onChange={onInputChange}
            name="State"
            selectData={nigeriaState}
          />
        </div>
      </div>
      <div className="mt-12 flex gap-x-16">
        <div>
          <BgButton name="Next" onclick={onNext} />
        </div>
        <div>
          <TransButton name="Cancel Payment" onclick={onNext} />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
