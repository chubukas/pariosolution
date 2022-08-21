import NavChange from "./navChange";
import PersonalInfo from "./personalInfo";

const Container = () => {
  return (
    <div className="mt-28 md:mx-auto mx-6 md:w-4/12">
      <div className="mb-8">
        <p className=" font-semibold text-xl text-[#4E598C]">
          Complete your Purchase
        </p>
      </div>
      <NavChange />
      <div className="mt-10">
        <PersonalInfo />
      </div>
    </div>
  );
};

export default Container;
