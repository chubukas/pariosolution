import { useAppContext } from "../context";
import { ACTIVE } from "../context/types";

const hearderChange = ["Personal Info", "Billing Info", "Confirm Payment"];

const NavChange = () => {
  const [appState, dispatch] = useAppContext();

  const { active } = appState;

  const mappedHeaders = hearderChange.map((data, i) => (
    <div
      key={i}
      className="cursor-pointer relative"
      onClick={() => dispatch({ type: ACTIVE, payload: data })}
    >
      <p className={`text-xs ${active === data ? "text-[#F2994A]" : ""}`}>
        {data}
      </p>
      {active === data && (
        <p className="border-b-8 border-[#F2994A] rounded-lg absolute -bottom-4 w-full"></p>
      )}
    </div>
  ));

  return (
    <div className="border-b border-black text-sm md:text-base md:font-semibold text-[#BDBDBD]">
      <div className="flex justify-between pb-3">{mappedHeaders}</div>
    </div>
  );
};

export default NavChange;
