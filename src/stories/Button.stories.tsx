import type { Meta, StoryObj } from '@storybook/react';
import Button from '~/components/common/Button';

const meta = {
  title: 'Component/Button',
  component: Button,
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
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
