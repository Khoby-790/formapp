import React, { Fragment, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs';
import Transition from './Transition';

type FormItemType = {
    form: IForm
}

const FormItem = ({ form }: FormItemType) => {
    const [showmenu, setShowmenu] = useState(false);
    return (
        <Fragment>
            <div className="h-64 relative mx-3 mb-2 bg-white">
                <div className="absolute rounded-bl-lg  bg-gray-600 cursor-pointer w-11 flex justify-center items-center h-8 right-0">
                    <BsThreeDots color="#fff" size={30} />
                    <div className="relative">
                        <Transition show={showmenu}>
                            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Account settings</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Support</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">License</a>
                                    <form method="POST" action="#">
                                        <button type="submit" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                                            Sign out
                                </button>
                                    </form>
                                </div>
                            </div>
                        </Transition>
                    </div>
                </div>
                <div className="bg-green-600 w-full max-h-24 h-24"></div>
                <div className="h-40  w-full px-2 flex justify-between flex-col">
                    <div className="p-3 overflow-ellipsis">
                        <h2 className="text-md " >{form.title}</h2>
                    </div>
                    <div className="border-t text-md text-gray-400 py-2 px-2 border-gray-400">
                        {form.published && <Fragment>
                            {form?.response?.length || 0} responses
                        </Fragment>}
                        {!form.published && <Fragment>
                            Form has not been published yet
                        </Fragment>}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default FormItem
