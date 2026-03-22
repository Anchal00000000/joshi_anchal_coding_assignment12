import RadioButton from './RadioButton';

const meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    options: { control: 'array' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

export const Default = {
  args: {
    options: ['Option A', 'Option B', 'Option C'],
    disabled: false,
  },
};

export const Disabled = {
  args: {
    options: ['Option A', 'Option B', 'Option C'],
    disabled: true,
  },
};
