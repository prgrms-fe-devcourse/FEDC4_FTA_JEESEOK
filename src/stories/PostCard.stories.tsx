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
    'title title title title title title title title title title title title title title',
  comments: [1, 2, 3, 4],
  likes: [1, 2, 3, 4],
  channel: '채널',
  author: {
    fullName: '작성자',
  },
  createdAt: '2022-02-22',
};

export const Default: Story = () => {
  const { _id, title, comments, likes, channel, author, createdAt } = post;
  return (
    <PostCard
      _id={_id}
      title={title}
      comments={comments}
      likes={likes}
      channel={channel}
      author={author}
      createdAt={createdAt}
    ></PostCard>
  );
};
