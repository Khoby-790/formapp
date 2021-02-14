import React, { forwardRef } from 'react'

const FormInput = forwardRef(({ name, type = "text", label, ...rest }, ref) => {
    return (
        <div className="flex flex-1 flex-col">
            <label htmlFor={name}>{label}</label>
        </div>
    )
})

export default FormInput
