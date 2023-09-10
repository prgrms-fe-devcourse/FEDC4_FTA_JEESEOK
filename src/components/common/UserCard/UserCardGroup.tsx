import React from 'react';
import { UserCardGroupWrapper } from './style';

interface GroupProps {
  children?: React.ReactNode;
  imageSize?: number;
  gap?: number;
}

const UserCardGroup = ({
  children,
  imageSize = 200,
  gap,
  ...props
}: GroupProps) => {
  const userCards = React.Children.toArray(children)
    .filter((element) => {
      if (
        React.isValidElement(element) &&
        element.props.__TYPE === 'UserCard'
      ) {
        return true;
      } else {
        console.warn("Only accepts UserCard as it's children");
        return false;
      }
    })
    .map((userCard) => {
      if (React.isValidElement(userCard)) {
        return React.cloneElement(userCard, {
          ...userCard.props,
          imageSize,
          style: {
            ...userCard.props.style,
          },
        });
      }
    });
  return (
    <UserCardGroupWrapper {...props} style={{ gap: `${gap}px` }}>
      {userCards}
    </UserCardGroupWrapper>
  );
};

export default UserCardGroup;
