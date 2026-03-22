import HeroImage from './HeroImage';

const meta = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    disabled: { control: 'boolean' },
    style: { control: 'object' },
  },
};

export default meta;

export const Default = {
  args: {
    src: 'https://via.placeholder.com/800x300',
    alt: 'Sample Hero Image',
    width: '100%',
    height: '300px',
    disabled: false,
    style: { borderRadius: '8px' },
  },
};

export const Disabled = {
  args: {
    src: 'https://via.placeholder.com/800x300',
    alt: 'Disabled Hero Image',
    width: '100%',
    height: '300px',
    disabled: true,
    style: { borderRadius: '8px' },
  },
};
