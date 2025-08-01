/**
 * @param {React.LabelHTMLAttributes<HTMLLabelElement>} props
 */
const Label = ({children, ...props}) => {
    return (
        <label 
            {...props}
            className="block mb-2 text-sm font-medium text-gray-700"
        >
            {children}
        </label>
    )
}
export default Label;