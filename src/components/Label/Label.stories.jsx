import Label from "./Label";

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {
    text: { control: "text" },
    color: { control: "color" },
    fontSize: { control: "text" },
    disabled: { control: "boolean" }
  }
};

export const Default = {
  args: {
    text: "Label Text",
    color: "black",
    fontSize: "16px",
    disabled: false
  }
};

export const Disabled = {
  args: {
    text: "Disabled Label",
    color: "black",
    fontSize: "16px",
    disabled: true
  }
};