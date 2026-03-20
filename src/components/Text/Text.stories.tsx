import Text from './Text';

const meta = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    color: { control: 'color' },
    fontSize: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

export const Default = {
  args: {
    content: 'This is some text content. hii ',
    color: 'red ',
    fontSize: '20px',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    content: 'This text is disabled',
    color: 'black',
    fontSize: '16px',
    disabled: true,
  },
};
