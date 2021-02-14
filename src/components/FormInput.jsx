import React, { forwardRef } from 'react'

const FormInput = forwardRef(({ name, type = "text", label, showError, errors = null, ...rest }, ref) => {
    return (
        <div className="flex flex-1 flex-col">
            <label htmlFor={name}>{label}</label>
            <input className="h-11 border px-2 outline-none" name={name} type={type} {...rest} ref={ref} />
            {errors && errors[name] && <p className="text-red-600">{errors[name]?.message}</p>}
        </div>
    )
})

export default FormInput
