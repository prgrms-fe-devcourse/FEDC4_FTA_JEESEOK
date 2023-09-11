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
    width: '425px',
    height: '425px',
    borderRadius: '5px',
    fontSize: '16px',
    scrollBarWidth: 1,
    scrollBarThumbColor: 'gray',
  },
};
