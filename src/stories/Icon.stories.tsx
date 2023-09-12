import type { Meta, StoryObj } from '@storybook/react';
import Icon from '~/components/common/Icon';

const meta: Meta<typeof Icon> = {
  title: 'Component/Icon',
  component: Icon,
  argTypes: {
    name: { control: 'text' },
    size: { control: { type: 'range', min: 16, max: 80 } },
    rotate: { control: { type: 'range', min: 0, max: 360 } },
    strokeWidth: { control: { type: 'range', min: 2, max: 6 } },
    color: { control: 'color' },
  },
  args: {
    name: 'box',
    size: 16,
    rotate: 0,
    strokeWidth: 2,
    color: '#222',
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  render: (args) => <Icon {...args} />,
};
