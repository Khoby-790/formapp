import React, { Fragment, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import Modal from './Modal';


const AddNewForm = () => {
    const [openModal, setOpenModal] = useState(false);
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
                
            </Modal>

        </Fragment>
    )
}

export default AddNewForm

const Form = () => {

    return (
        <div className="">
            <div className="bg-green-800"></div>
        </div>
    );
}
