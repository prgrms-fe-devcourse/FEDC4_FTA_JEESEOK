import Logo from '~/components/common/Logo/index';
import { LogoProps } from '~/types/logo';

export default {
  title: 'Component/Logo',
  component: Logo,
  argTypes: {
    width: { defaultValue: 80, control: { type: 'range', min: 40, max: 120 } },
  },
};

export const Default = (args: LogoProps) => {
  return <Logo {...args} />;
};
