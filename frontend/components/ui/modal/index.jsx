import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
    return ReactDOM.createPortal(
        <div>
            <div className="container">
            <button>Close</button>

            {children}
            </div>
        </div>
    )
}

export default Modal;