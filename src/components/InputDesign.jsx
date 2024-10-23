const InputDesign = ({
  onclick,
  setonclick,
  label,
  inputicon,
  value,
  placeholder,
  readOnly,
  arrow,
}) => {
  return (
    <div>
      <fieldset
        onClick={() => setonclick(!onclick)}
        className="relative border-[1px] border-gray-600 rounded-xl "
      >
        <legend className="ml-3 px-[5px] text-xs text-gray-500">
          {/* Naming Series */}
          {label}
        </legend>
        <div className=" flex justify-between gap-2 items-center  pl-4 pb-2">
          <div className="flex items-center gap-2">
            <div className="text-[#E70006] text-lg font-bold">
              {/* <FaRegUser  /> */}
              {inputicon}
            </div>

            <input
              type="text"
              className=" bg-transparent outline-none text-black "
              value={value}
              placeholder={placeholder}
              readOnly={readOnly}
            />
          </div>
          {arrow}
        </div>
      </fieldset>
    </div>
  );
};

export default InputDesign;
