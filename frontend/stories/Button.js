import React from "react";
import PropTypes from "prop-types";
import SampleButton from "../components/ui/sample_button";
import { action } from "@storybook/addon-actions";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, ...props }) => {
  return (
    <SampleButton onClick={() => action("clicked")} type='button' {...props}>
      {label}
    </SampleButton>
  );
};

//These are the types that each property takes, the comments on each one show up on the story.
Button.propTypes = {
  /**
   * What background color to use
   */
  background: PropTypes.string,
  /**
   * What color is the text
   */
  color: PropTypes.string,
  /**
   * Does it have sharp corners?
   */
  sharp: PropTypes.bool,
  /**
   * What color is the text
   */
  color: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

//Default props
Button.defaultProps = {
  background: null,
  color: null,
  sharp: false,
  primary: false,
  size: "medium",
  onClick: undefined,
};
