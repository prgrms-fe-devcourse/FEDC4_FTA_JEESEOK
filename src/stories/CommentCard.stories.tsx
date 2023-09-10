import type { Meta, StoryObj } from '@storybook/react';
import CommentCard from '~/components/common/CommentCard';

const meta = {
  title: 'Component/CommentCard',
  component: CommentCard,
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <CommentCard></CommentCard>;
  },
};
