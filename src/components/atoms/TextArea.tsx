
type TextAreaProps = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & { label: string }

const TextArea = ({ label, name, onChange, ...rest }: TextAreaProps) => {
    return <div className="flex flex-col">

        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor={name}>{label}</label>
        <textarea
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5" name={name} onChange={onChange} id={name} {...rest} />
    </div>;
}

export default TextArea

