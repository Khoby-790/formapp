import React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import FormInput from './FormInput';


type FormProps = {
    addForm: (form: IForm) => void
    setShow: (state: boolean) => void
}


const FormsNewForm = ({ addForm, setShow }: FormProps) => {
    const dispatch: Dispatch<any> = useDispatch()
    const { register, handleSubmit, errors } = useForm();
    const onAddForm = (values: FieldValues) => {
        dispatch(addForm({
            title: values?.title,
            deadline: values?.deadline,
            published: false
        }))
        setShow(false);
    }

    return (
        <form onSubmit={handleSubmit(onAddForm)} className="">
            <div className="bg-green-800 py-4 px-4">
                <h3 className="text-white font-bold text-lg">Add New Form</h3>
                <p className="text-white font-thin">Provide valid details to create a form to be used by the outside world</p>
            </div>
            <div className="py-5 px-3">
                <div className="grid grid-cols-2 gap-x-4">
                    <FormInput errors={errors} label="Form title" name="title" ref={register({ required: "Provide Form title" })} />
                    <FormInput errors={errors} type="date" label="Form Deadline" name="deadline" ref={register({ required: "Provide Form deadline" })} />
                </div>
                <div>
                    <button className="bg-green-400 text-white px-3 py-2 mt-3">Submit</button>
                </div>
            </div>
        </form>
    );
}


export default FormsNewForm
