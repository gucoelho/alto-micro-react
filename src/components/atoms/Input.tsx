import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & { label: string }

const Input: React.FC<InputProps> = ({ label, name, onChange, ...rest }) => {
    return <div className="flex flex-col">
        <label htmlFor={name} >{label}</label>
        <input
            id={name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 focus:ring-1"
            {...rest} name={name} onChange={onChange} />
    </div>;
}

export default Input


