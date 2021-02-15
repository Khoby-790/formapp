import React, { Fragment } from 'react'
import { BsThreeDots } from 'react-icons/bs';
import { Interface } from 'readline';

type FormItemType = {
    form: IQuiz
}

const FormItem = ({ form }: FormItemType) => {
    return (
        <Fragment>
            <div className="h-64 relative mx-3 mb-2 bg-white">
                <div className="absolute rounded-bl-lg  bg-gray-600 cursor-pointer w-11 flex justify-center items-center h-8 right-0">
                    <BsThreeDots color="#fff" size={30} />
                </div>
                <div className="bg-green-600 w-full max-h-24 h-24"></div>
                <div className="h-40  w-full px-2 flex justify-between flex-col">
                    <div className="p-3 overflow-ellipsis">
                        <h2 className="text-md " >{form.title}</h2>
                    </div>
                    <div className="border-t text-md text-gray-400 py-2 px-2 border-gray-400">
                        0 responses
              </div>
                </div>
            </div>
        </Fragment>
    )
}

export default FormItem
