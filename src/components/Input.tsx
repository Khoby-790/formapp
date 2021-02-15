import React, { forwardRef } from 'react';
import { FieldErrors } from 'react-hook-form';


type InputType = React.ClassAttributes<HTMLInputElement | HTMLLabelElement | HTMLTextAreaElement | HTMLSelectElement>
type InputProps = React.HTMLProps<HTMLInputElement | HTMLLabelElement | HTMLTextAreaElement | HTMLSelectElement>
interface Props {
    type?: string;
    name?: string;
    label?: String;
    errors?: FieldErrors
}

const Input = forwardRef<HTMLInputElement, Props & InputType>(({ errors, name, type, label, ...rest }, ref) => {
    const hasError = name && errors && errors[name];
    const errorMessage = hasError && errors && name && errors[name]?.message
    return (
        <div className="flex flex-1 flex-col">
            {label && <label className={`${hasError ? "text-red-600" : ""}`} htmlFor={name}>{label}</label>}
            <input className={`h-11 border px-2 outline-none ${hasError ? "border-red-500" : ""}`} name={name} type={type} {...rest} ref={ref} />
            { hasError && <p className="text-red-600">{errorMessage}</p>}
        </div>
    )
})

export default Input
