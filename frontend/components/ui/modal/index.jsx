import React, { useState } from "react";
import ClientOnlyPortal from "./clientOnlyPortal";

const Modal = ({ children }) => {
  const [open, setOpen] = useState();

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      {open && (
        <ClientOnlyPortal>
          <div className="backdrop">
            <div className="modal">
              {children}
              <button type="button" onClick={() => setOpen(false)}>
                Close Modal
              </button>
            </div>
            <style jsx>{`
              :global(body) {
                overflow: hidden;
              }
              .backdrop {
                position: fixed;
                background-color: rgba(0, 0, 0, 0.7);
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
              }
              .modal {
                background-color: white;
                position: absolute;
                top: 10%;
                right: 10%;
                bottom: 10%;
                left: 10%;
                padding: 1em;
              }
              & button {
                position: relative;
                top: 220px;
              }
            `}</style>
          </div>
        </ClientOnlyPortal>
      )}
    </>
  );
};

export default Modal;
