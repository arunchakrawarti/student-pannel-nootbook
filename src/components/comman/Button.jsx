
// const variantClasses = {
//   primary: "bg-[var(--color-accent-orange)]",
//   secondary:
//     "bg-gray-100 text-gray-800 border border-gray-300 hover:bg-gray-200",
//   outline:
//     "bg-transparent text-gray-800 border border-gray-300 hover:bg-gray-100",
//   danger: "bg-red-600 text-white border border-transparent hover:bg-red-700",
// };

// const sizeClasses = {
//   sm: "px-3 py-1.5 text-sm",
//   md: "px-4 py-2 text-sm",
//   lg: "px-6 py-3 text-base",
// };

// export const Button = ({
//   children,
//   icon,
//   iconPosition = "left", // left | right
//   loading = false,
//   variant = "primary",
//   size = "md",
//   width = "w-full", // or "w-auto"
//   className = "",
//   type = "button",
//   ...props
// }) => {
//   return (
//     <button
//       type={type}
//       disabled={props.disabled || loading}
//       className={`
//         font-inter font-medium text-[14px] leading-[20px] tracking-[-0.15px] max-w-fit px-4 py-1 rounded-md cursor-pointer
//         ${variantClasses[variant]}
//         ${sizeClasses[size]}
//         ${width}
//         ${className}
//       `}
//       {...props}
//     >
      
//       {!loading && icon && iconPosition === "left" && (
//         <i className={`${icon} text-lg`} />
//       )}
//       {children}
//       {!loading && icon && iconPosition === "right" && (
//         <i className={`${icon} text-lg`} />
//       )}
//     </button>
//   );
// };



const variantClasses = {
  primary: "bg-[var(--color-accent-orange)] text-white hover:opacity-90",
  secondary:
    "bg-gray-100 text-gray-800 border border-gray-300 hover:bg-gray-200",
  outline:
    "bg-transparent text-gray-800 border border-gray-300 hover:bg-gray-100",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

const sizeClasses = {
  sm: "py-1.5 text-sm",
  md: "py-2 text-sm",
  lg: "py-3 text-base",
};

const Button = ({
  children,
  icon,
  iconPosition = "left",
  loading = false,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`
        w-full
        font-inter font-medium tracking-[-0.15px]
        rounded-lg cursor-pointer
        flex items-center justify-center gap-2
        transition-all duration-200
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabled || loading ? "opacity-60 cursor-not-allowed" : ""}
        ${className}
      `}
      {...props}
    >
      {!loading && icon && iconPosition === "left" && icon}
      {children}
      {!loading && icon && iconPosition === "right" && icon}
    </button>
  );
};

export default Button;
