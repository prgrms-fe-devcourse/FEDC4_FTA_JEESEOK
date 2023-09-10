import type { Meta, StoryObj } from '@storybook/react';
import Textarea from '~/components/common/Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Component/Textarea',
  component: Textarea,
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Primary: Story = {
  args: {
    text: 'hi',
    width: '100px',
    height: '100px',
    borderRadius: '10px',
    fontSize: '16px',
  },
};
