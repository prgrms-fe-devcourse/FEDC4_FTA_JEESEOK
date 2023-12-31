import type { Meta, StoryFn } from '@storybook/react';
import CommentCard from '~/components/postDetail/CommentCard';
import { User } from '~/types';

const meta = {
  title: 'Component/CommentCard',
  component: CommentCard,
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryFn<typeof meta>;

const commentData = {
  _id: 'id',
  comment:
    'comment comment commment comment comment commment comment comment commment',
  author: {
    image: '',
    fullName: 'fullName',
  },
  post: 'postId',
  createdAt: '2022-02-22',
};

export const Default: Story = () => {
  const { _id, comment, author, createdAt } = commentData;
  return (
    <CommentCard
      _id={_id}
      comment={comment}
      author={author as User}
      createdAt={createdAt}
      isLogin={false}
      onDeleteComment={() => {}}
    />
  );
};
