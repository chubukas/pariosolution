const Input = ({ onChange, name, placeholder, type, required }) => {
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
      <input
        className=" w-full h-8 border rounded-md pl-3 text-xs border-[#4E598C]"
        type={type}
        name={name.toLowerCase().split(" ").join("")}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Input;
