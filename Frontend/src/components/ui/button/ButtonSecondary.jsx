const ButtonSecundary = ({children, icon: Icon}) => {
  return (
    <button
      type="button"
      className="px-6 py-3 border border-[#d9d9d9] text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
    >
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
};
export default ButtonSecundary;
