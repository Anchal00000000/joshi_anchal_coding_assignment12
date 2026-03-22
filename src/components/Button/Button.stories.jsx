import Button from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

export const Primary = {
  args: {
    label: 'Click Me',
    backgroundColor: 'blue',
    color: 'white',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: "Can't Click",
    backgroundColor: 'blue',
    color: 'white',
    disabled: true,
  },
};
