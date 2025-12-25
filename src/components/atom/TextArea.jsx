const Textarea = ({ id, onChange, placeholder, value, name, style }) => {
  return (
    <textarea
      className={`${style} h-110 w-full bg-[#F3F3F5] rounded-lg border border-gray-200  px-3 py-2 outline-0 font-inter font-normal text-[15px] leading-[22.75px] tracking-[-0.15px]`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
    ></textarea>
  );
};

export default Textarea;
