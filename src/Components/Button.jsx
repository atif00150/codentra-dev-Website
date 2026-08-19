function Button({ text, icon, className = "", iconClass = "", ...props }) {
  return (
    <button
      className={`flex items-center font-bold px-2 sm:px-4 py-2  ${className}`}
      {...props}
    >
      {icon && <img src={icon} alt="" className={iconClass} />}
      {text}
    </button>
  );
}

export default Button;
