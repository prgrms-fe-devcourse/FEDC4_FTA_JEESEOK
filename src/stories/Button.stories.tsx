import type { Meta, StoryObj } from '@storybook/react';
import Button from '~/components/common/Button';

const meta = {
  title: 'Component/Button',
  component: Button,
  args: {
    disabled: false,
    fontSize: '14px',
    fontWeight: '400',
    width: '40px',
    height: '20px',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    fontSize: {
      control: 'number',
    },
    fontWeight: {
      control: 'number',
    },
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <Button {...args}>test</Button>;
  },
};
