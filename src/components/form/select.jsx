const Select = ({ onChange, name, required, selectData }) => {
  return (
    <div>
      <div className="text-xs font-semibold mb-2">
        {name}
        {required && <span className="text-red-500 ml-2">*</span>}
      </div>
      <select
        className=" w-full h-8 border rounded-md pl-3 text-xs border-[#4E598C] bg-white"
        name={name.toLowerCase().split(" ").join("")}
        onChange={onChange}
        required={required}
      >
        {selectData &&
          selectData.map((data, i) => (
            <option key={i} value={data}>
              {data}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
