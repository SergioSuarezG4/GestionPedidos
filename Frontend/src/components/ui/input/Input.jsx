/**
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props
 */
const Input = (props) => {
  return (
    <input
      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4da6ff] focus:border-transparent"
      {...props}
    />

  )
};

export default Input;
