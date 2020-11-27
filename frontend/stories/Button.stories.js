import React from "react";

import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    background: { control: "color" },
    color: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

//These are the presets that show up on the left side of the story
export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};
