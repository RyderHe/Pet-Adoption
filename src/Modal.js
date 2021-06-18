import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
    const elRef = useRef(null);

    if (!elRef.current) {
        elRef.current = document.createElement("div");
    }

    useEffect(() => { 
        modalRoot.appendChild(elRef.current); // whenever created, put it into dom
        return () => modalRoot.removeChild(elRef.current); // whenever destroy, remove it from dom
    }, []); // Run once

    return createPortal(<div>{children}</div>, elRef.current);
}

export default Modal;

