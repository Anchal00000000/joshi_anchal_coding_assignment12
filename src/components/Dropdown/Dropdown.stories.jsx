import Dropdown from './Dropdown';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    options: { control: 'array' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

export const Default = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    disabled: false,
  },
};

export const Disabled = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    disabled: true,
  },
};
