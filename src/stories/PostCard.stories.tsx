import type { Meta, StoryFn } from '@storybook/react';
import PostCard from '~/components/common/PostCard';

const meta = {
  title: 'Component/PostCard',
  component: PostCard,
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryFn<typeof meta>;

const post = {
  _id: 'id',
  title:
    'titletitletitletitletitletitletitletitletitletitletitletitletitletitle',
  comments: [1, 2, 3, 4],
  likes: [1, 2, 3, 4],
  channel: '채널',
  author: {
    fullName: '작성자',
  },
  createdAt: '2022-2-22',
  updatedAt: '2022-2-22',
};

export const Default: Story = () => {
  return <PostCard post={post}></PostCard>;
};
