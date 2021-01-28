import React from "react";
import ClientOnlyPortal from "./clientOnlyPortal";
import { COLORS } from '../../../styles/colors';

const Modal = ({ children, open }) => {
  return (
    <>
      {open && (
        <ClientOnlyPortal>
          <div className="backdrop">
            <div className="modal">{children}</div>
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
                background-color: ${COLORS.PURPLES.LIGHT};
                color: ${COLORS.SHADES.OFFWHITE};
                position: absolute;
                top: 20%;
                right: 10%;
                bottom: 50%;
                left: 10%;
                padding: 1em;
                border-radius: 10px;
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
