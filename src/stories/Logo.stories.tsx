import type { Meta, StoryObj } from '@storybook/react';
import Logo from '~/components/common/Logo';

const meta: Meta<typeof Logo> = {
  title: 'Component/Logo',
  component: Logo,
  argTypes: {
    width: {
      defaultValue: 80,
      control: {
        type: 'range',
        min: 40,
        max: 120,
        step: 1,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    width: 80,
  },
};
