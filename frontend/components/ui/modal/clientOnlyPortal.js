import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ClientOnlyPortal = ({ children, selector }) => {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let container;
    const rootContainer = document.createElement("div");
    const parentElem = document.querySelector("#__next");
    parentElem.appendChild(rootContainer);
    container = rootContainer;
    ref.current = container;
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current) : null;
};

export default ClientOnlyPortal;
