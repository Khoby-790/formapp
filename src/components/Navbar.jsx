import React from 'react';
import { BsGrid, BsPerson } from 'react-icons/bs'

const Navbar = () => {
    return (
        <div className="flex z-10 fixed top-0 left-0 right-0 h-11 mb-7 justify-between bg-green-800 items-center px-10">
            <div className="flex-1 flex items-center">
                <div className="cursor-pointer">
                    <BsGrid size={22} color="#fff" />
                </div>
                <div className="ml-5 text-white">
                    <h3 className="text-white font-mono font-normal">Forms</h3>
                </div>
            </div>
            <div className="flex-1 flex justify-end">
                <BsPerson size={22} color="#fff" />
            </div>
        </div>
    )
}

export default Navbar
