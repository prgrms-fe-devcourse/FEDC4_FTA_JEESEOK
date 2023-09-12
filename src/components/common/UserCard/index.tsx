import React from 'react';
import PropTypes from 'prop-types';
import Image, { modeType } from '../Image';
import UserCardGroup from './UserCardGroup';
import { CardWrapper, MbtiTag, Text } from './style';

export interface UserCardProp {
  src: string;
  alt?: string;
  imageSize?: number;
  nickname: string;
  mbti: string;
  style?: React.CSSProperties;
}

const UserCard = ({
  src,
  alt,
  imageSize = 200,
  nickname,
  mbti,
  ...props
}: UserCardProp) => {
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    mode: 'cover' as modeType,
  };
  return (
    <CardWrapper {...props}>
      <Image {...imageStyle} src={src} alt={alt} shape="circle" />
      <Text>{nickname}</Text>
      <MbtiTag>{mbti}</MbtiTag>
    </CardWrapper>
  );
};

UserCard.defaultProps = {
  __TYPE: 'UserCard',
};
UserCard.propTypes = {
  __TYPE: PropTypes.string,
};

UserCard.Group = UserCardGroup;

export default UserCard;
