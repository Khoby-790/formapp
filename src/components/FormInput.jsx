import React, { forwardRef } from 'react'

const FormInput = forwardRef(({ name, type = "text", label, ...rest }, ref) => {
    return (
        <div className="flex flex-1 flex-col">
            <label htmlFor={name}>{label}</label>
            <input className="h-11 border px-2 outline-none" name={name} type={type} {...rest} ref={ref} />
        </div>
    )
})

export default FormInput
