import type { Meta, StoryObj } from '@storybook/react';
import Image from '~/components/common/Image';

const meta: Meta<typeof Image> = {
  title: 'Component/Image',
  component: Image,
  argTypes: {
    block: {
      control: { type: 'boolean' },
    },
    src: {
      type: { name: 'string', required: true },
      control: { type: 'text' },
    },
    width: {
      control: { type: 'range', min: 200, max: 600 },
    },
    height: {
      control: { type: 'range', min: 200, max: 600 },
    },
    alt: {
      control: { type: 'text' },
    },
    mode: {
      options: ['cover', 'fill', 'contain'],
      control: { type: 'inline-radio' },
    },
    shape: {
      options: ['circle', 'round', 'square'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    block: false,
    src: 'https://picsum.photos/200',
    width: 200,
    height: 200,
    mode: 'cover',
    shape: 'square',
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  render: (args) => <Image {...args} />,
};

export const Lazy: Story = {
  render: (args) => (
    <div>
      {Array.from(new Array(20), (_, k) => k).map((i) => (
        <Image {...args} src={`${args.src}?${i}`} key={i} />
      ))}
    </div>
  ),
};
