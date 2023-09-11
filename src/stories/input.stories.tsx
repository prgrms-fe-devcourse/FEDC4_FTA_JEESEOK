import type { Meta, StoryObj } from '@storybook/react';
import Input from '~/components/common/Input';

const meta: Meta<typeof Input> = {
  title: 'Component/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Input',
  },
};
