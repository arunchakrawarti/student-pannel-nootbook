"use client";

const Select = ({ select, name, label, icon, options, value, onChange }) => {
  return (
    <div className="flex w-full flex-col gap-1">
      <label className="text-sm" htmlFor={name}>
        {label}
      </label>
      <div className="flex items-center gap-2 rounded-lg border border-[#D1D5DB] bg-white px-2">
        {icon && <i className={`${icon} ri-lg`}></i>}
        <select
          className="w-full rounded-lg py-2 outline-0"
          name={name}
          id={name}
          value={value}
          onChange={(e) => onChange(e)} // Pass the whole event here
        >
          <option value="">Select</option>
          {options?.map((option, i) => (
            <option key={i} value={option?.value || option}>
              {option?.label || option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
