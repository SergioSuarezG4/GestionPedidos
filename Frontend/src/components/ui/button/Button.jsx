/**
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props
 */
const Button = ({ children, icon: Icon, isPrimary = false, ...props}) => {
  return (
    <button
      {...props}
      className={`flex items-center gap-2 px-6 ${isPrimary ? 'py-2' : 'py-3'} bg-[#4da6ff] hover:bg-blue-600 text-white rounded-lg font-medium transition duration-200`}
    >
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
};

export default Button;
