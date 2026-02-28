import RadioButton from "./RadioButton";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    options: { control: "array" },
    disabled: { control: "boolean" }
  }
};

export const Default = {
  args: {
    options: ["Option A", "Option B", "Option C"],
    disabled: false
  }
};

export const Disabled = {
  args: {
    options: ["Option A", "Option B", "Option C"],
    disabled: true
  }
};