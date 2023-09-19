import type { Meta, StoryObj } from '@storybook/react';
import TopNavBtn from '~/components/common/TopNavBtn';

const meta: Meta<typeof TopNavBtn> = {
  title: 'Component/TopNavBtn',
  component: TopNavBtn,
  argTypes: {
    width: {
      control: { type: 'range', min: 100, max: 600 },
    },
    height: {
      control: { type: 'range', min: 100, max: 600 },
    },
    title: {
      control: { type: 'text' },
    },
    isActive: {
      control: { type: 'boolean' },
    },
  },
  args: {
    width: 166,
    height: 48,
    title: '기본 버튼',
    isActive: false,
  },
};

export default meta;
type Story = StoryObj<typeof TopNavBtn>;

export const Default: Story = {
  render: (args) => <TopNavBtn {...args} />,
};
