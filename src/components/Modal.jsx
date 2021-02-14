import React, { Fragment, useRef } from 'react'
import Transition from './Transition';
import ReactDom from 'react-dom';
import PropTypes from "prop-types";
import { useOutsideClick } from '../hooks';


const Modal = ({ show, setShow, children, height, size, canClose }) => {
    const ref = useRef(null);

    useOutsideClick(ref, () => {
        if (canClose) setShow(false);
    });

    
    return ReactDom.createPortal(
        <Fragment>
            <Transition show={show}>
                <div class="fixed z-20 bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
                    <Transition
                        enter="ease-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-out duration-300"
                        leaveFrom="translate-x-0"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed  inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-black opacity-30" />
                        </div>
                    </Transition>

                    <Transition
                        show={show}
                        enter="transform transition ease-in-out duration-700 sm:duration-700"
                        enterFrom="translate-x-5"
                        enterTo="opacity-100 translate-x-0 sm:scale-100"
                        leave="transform transition ease-in-out duration-700 sm:duration-700"
                        leaveFrom="opacity-100 translate-x-0 sm:scale-100"
                        leaveTo="-translate-x-full"
                    >
                        <div className="fixed z-20 bottom-0 inset-x-0   sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
                            <div
                                ref={ref}
                                style={{ width: `${size}vw`, height: `${height}vh` }}
                                className="bg-white  rounded-none  overflow-hidden shadow-xl transform transition-all"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="modal-headline"
                            >
                                {children}
                            </div>
                        </div>
                    </Transition>
                </div>
            </Transition>
        </Fragment>,
        document.getElementById("modal")
    )
}

Modal.defaultProps = {
    size: 35,
    canClose: true,
};

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
    size: PropTypes.number,
    height: PropTypes.number,
    children: PropTypes.node,
    canClose: PropTypes.bool,
};

export default Modal
