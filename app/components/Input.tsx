"use client"

const className = `
            p-3
            my-2
            border-2
            border-gray-200
            rounded
            w-full
            focus:outline-none
            focus:bg-white
            focus:border-blue-500
`
interface InputProps {
    type: string;
    value?: string;
    placeholder?: string;
    onChange?: (value: any) => void;
}

const Input = ({ type, value, placeholder, onChange }: InputProps) => {

    return (
        <input
            type={type}
            value={value}
            className={className} 
            placeholder={placeholder} 
            onChange={(e) => { onChange && onChange(e.target.value)} }
            />
    );
}

export default Input;