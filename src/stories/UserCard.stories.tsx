import type { Meta, StoryObj } from '@storybook/react';
import UserCard from '~/components/common/UserCard';

const meta: Meta<typeof UserCard> = {
  title: 'Component/UserCard',
  component: UserCard.Group,
  argTypes: {
    src: {
      type: { name: 'string', required: true },
      control: { type: 'text' },
    },
    imageSize: {
      control: { type: 'range', min: 200, max: 600 },
    },
    alt: {
      control: { type: 'text' },
    },
    nickname: {
      control: { type: 'text' },
    },
    mbti: {
      control: { type: 'text' },
    },
  },
  args: {
    src: 'https://picsum.photos/200',
    imageSize: 200,
    nickname: '닉네임',
    mbti: 'ENFJ',
  },
};

export default meta;
type Story = StoryObj<typeof UserCard>;

export const Default: Story = {
  render: (args) => <UserCard {...args} />,
};

export const Group: Story = {
  render: () => (
    <UserCard.Group gap={30}>
      <UserCard
        src="https://picsum.photos/200?1"
        nickname="닉네임 1"
        mbti="ENFJ"
      />
      <UserCard
        src="https://picsum.photos/200?2"
        nickname="닉네임 2"
        mbti="INFJ"
      />
      <UserCard
        src="https://picsum.photos/200?3"
        nickname="닉네임 3"
        mbti="ESFJ"
      />
      <UserCard
        src="https://picsum.photos/200?4"
        nickname="닉네임 4"
        mbti="ENTP"
      />
    </UserCard.Group>
  ),
};
