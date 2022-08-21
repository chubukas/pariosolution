const Select = ({ onChange, name, required, selectData }) => {
  return (
    <div>
      <div className="text-xs font-semibold mb-2">
        {name}
        {required && <span className="text-red-500 ml-2">*</span>}
      </div>
      {required && (
        <div className="text-[10px] text-slate-400 mb-2">
          The purchase reciept would be sent to this address
        </div>
      )}

      <select
        className=" w-full h-8 border rounded-md pl-3 text-xs border-[#4E598C] bg-white"
        name={name.toLowerCase().split(" ").join("")}
        onChange={onChange}
        required={required}
      >
        {selectData &&
          selectData.map((data) => <option value={data}>{data}</option>)}
      </select>
    </div>
  );
};

export default Select;
