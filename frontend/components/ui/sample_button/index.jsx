import React from "react";
import Button from "./elements";

//Styles live in the elements file

const SampleButton = ({ children, onClick, styles, disabled, ...props }) => {
  // Props
  // children is what goes inside the component
  // onClick is the event that fires when we click the component
  // STYLES is the name of the prop passed and STYLE is the attribute to style a component
  // ...props is the rest of the props we might want to pass to the component
  return (
    <Button {...props} onClick={onClick} style={styles} disabled={disabled}>
      {children}
    </Button>
  );
};

export default SampleButton;
