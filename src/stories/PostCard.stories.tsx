import type { Meta, StoryObj } from '@storybook/react';
import PostCard from '~/components/common/PostCard';

const meta = {
  title: 'Component/PostCard',
  component: PostCard,
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <PostCard></PostCard>;
  },
};
