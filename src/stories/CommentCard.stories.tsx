import type { Meta, StoryFn } from '@storybook/react';
import CommentCard from '~/components/common/CommentCard';

const meta = {
  title: 'Component/CommentCard',
  component: CommentCard,
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryFn<typeof meta>;

const comment = {
  _id: 'id',
  comment: 'commentcommentcommmentcommentcommentcommmentcommentcommentcommment',
  author: {
    image: 'image',
    fullName: 'fullNmae',
  },
  post: 'postId',
  createdAt: '2022-2-22',
  updatedAt: '2022-2-22',
};

export const Default: Story = () => {
  return <CommentCard comment={comment} />;
};
