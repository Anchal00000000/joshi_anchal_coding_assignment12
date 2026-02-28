import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    imageSrc: { control: "text" },
    buttonText: { control: "text" },
    onButtonClick: { action: "clicked" },
    style: { control: "object" }
  }
};

export const Default = {
  args: {
    title: "Sample Card",
    description: "This is a description for the card component.",
    imageSrc: "https://via.placeholder.com/250x150",
    buttonText: "Learn More",
    style: {}
  }
};