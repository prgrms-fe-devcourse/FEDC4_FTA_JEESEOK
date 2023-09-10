import Footer from '~/components/common/Footer/index';
import { FooterProps } from '~/types/footer';

export default {
  title: 'Component/Footer',
  component: Footer,
  argTypes: {
    content: {
      defaultValue: [],
      control: { type: 'array' },
    },
  },
};

export const Default = (args: FooterProps) => {
  const { content } = args;
  return <Footer content={content} />;
};

Default.args = {
  content: ['추가 할 버튼의 컨텐츠를 입력해 주세요'],
};
