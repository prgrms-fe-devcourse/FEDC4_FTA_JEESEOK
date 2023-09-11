import type { Meta, StoryObj } from '@storybook/react';
import Tag from '~/components/common/Tag';

const meta: Meta<typeof Tag> = {
  title: 'Component/Tag',
  component: Tag,
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
  args: {
    text: 'TAG',
    width: '100px',
    height: '100px',
    fontColor: '000000',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    borderWidth: '10px',
    borderColor: '000000',
    fontSize: '16px',
    disabled: false,
    isLoading: false,
  },
};
