import React, { Fragment, useCallback, useState } from 'react'
import { useForm, FieldValues, FieldErrors } from 'react-hook-form';
import { FaPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import FormInput from './FormInput';
import Modal from './Modal';
import { addForm } from '../redux/actions/FormActions';

const AddNewForm = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const [openModal, setOpenModal] = useState(false);

    const _addForm = useCallback((form: IForm) => {
        dispatch(addForm(form));
    }, [dispatch])

    return (
        <Fragment>
            <div className="h-64 px-3 cursor-pointer mx-3 bg-white rounded-sm shadow-lg flex flex-col justify-center items-center">
                <div onClick={() => setOpenModal(true)} className="flex-1 border-b border-gray-400 w-full flex justify-center items-center flex-col">
                    <FaPlus className="text-gray-400" size={35} />
                    <h3 className="mt-2 text-gray-400">New Form</h3>
                </div>
                <div onClick={() => setOpenModal(true)} className="flex-1 w-full flex justify-center items-center flex-col">
                    <FaPlus className="text-gray-400" size={35} />
                    <h3 className="mt-2 text-gray-400">New Quiz</h3>
                </div>
            </div>
            <Modal size={50} show={openModal} setShow={setOpenModal}>
                <Form addForm={_addForm} />
            </Modal>
        </Fragment>
    )
}

export default AddNewForm

type FormProps = {
    addForm: (form: IForm) => void
}

const Form = ({ addForm }: FormProps) => {
    const { register, handleSubmit, errors } = useForm();
    const onAddForm = (values: FieldValues) => {
        addForm({
            title: values?.title,
            deadline: values?.deadline,
            published: false
        })
    }

    return (
        <form onSubmit={handleSubmit(onAddForm)} className="">
            <div className="bg-green-800 py-4 px-4">
                <h3 className="text-white font-bold text-lg">Add New Form</h3>
                <p className="text-white font-thin">Provide valid details to create a form to be used by the outside world</p>
            </div>
            <div className="py-5 px-3">
                <div className="grid grid-cols-2 gap-x-4">
                    <FormInput errors={errors} label="Form title" name="team_name" ref={register({ required: "Provide Form title" })} />
                    <FormInput errors={errors} type="date" label="Form Deadline" name="deadline" ref={register({ required: "Provide Form deadline" })} />
                </div>
                <div>
                    <button className="bg-green-400 text-white px-3 py-2 mt-3">Submit</button>
                </div>
            </div>
        </form>
    );
}
