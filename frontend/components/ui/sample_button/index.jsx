import React from "react";
import Button from "./elements";

//Styles live in the elements file

const SampleButton = ({ children, ...props }) => {
  // Props
  // children is what goes inside the component
  // onClick is the event that fires when we click the component
  // ...props is the rest of the props we might want to pass to the component
  return (
    <Button {...props} onClick={props.onClick}>
      {children}
    </Button>
  );
};

export default SampleButton;
