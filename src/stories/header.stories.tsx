import { BrowserRouter as Router } from 'react-router-dom';
import type { Meta, StoryObj } from '@storybook/react';
import Header from '~/components/common/Header';

const meta = {
  title: 'Component/Header',
  component: Header,
  args: {
    isLogo: true,
    isSearch: true,
    title: '스토리북',
  },
  argTypes: {
    isLogo: {
      control: 'boolean',
    },
    isSearch: {
      control: 'boolean',
    },
    title: {
      control: 'string',
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <Router>
        <Header {...args}>test</Header>
      </Router>
    );
  },
};
