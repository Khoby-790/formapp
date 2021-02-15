import React, { forwardRef } from 'react';
import { FieldErrors } from 'react-hook-form';


interface InputProps extends React.HTMLProps<HTMLInputElement> {
    // type?: String;
    // name?: String;
    // label?: String;
    // errors?: FieldErrors
    // rest?: React.HTMLProps<HTMLInputElement>
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ errors, name, type, ...rest }, ref) => {
    const hasError = errors && errors[name];
    return (
        <div className="flex flex-1 flex-col">
            <label className={`${hasError ? "text-red-600" : ""}`} htmlFor={name}>{label}</label>
            <input className={`h-11 border px-2 outline-none ${hasError ? "border-red-500" : ""}`} name={name} type={type} {...rest} ref={ref} />
            { hasError && <p className="text-red-600">{errors[name]?.message}</p>}
        </div>
    )
})

export default Input
