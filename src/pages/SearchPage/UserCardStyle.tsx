import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Image, { modeType } from '~/components/common/Image';
import UserCardGroup from '~/components/common/UserCard/UserCardGroup';

///import { CardWrapper, MbtiTag, Text } from './style';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 5px 10px;
  height: 54px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const Text = styled.div`
  padding-left: 20px;
  flex-grow: 1;
  font-size: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const MbtiTag = styled.div`
  background-color: lightgray;
  font-size: 15px;
  padding: 5px;
  width: 40px;
  border-radius: 25%;
  flex-shrink: 0;
  text-align: center;
  box-sizing: border-box;
`;

export const UserCardGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export interface UserCardProp {
  src: string;
  alt?: string;
  imageSize?: number;
  nickname: string;
  mbti: string;
  id: string;
  style?: React.CSSProperties;
}

const UserCard = ({
  src,
  alt,
  imageSize = 200,
  nickname,
  mbti,
  id,
  ...props
}: UserCardProp) => {
  const navigate = useNavigate();

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    mode: 'cover' as modeType,
  };

  const handleClick = () => {
    navigate(`/user/${id}`);
  };
  return (
    <CardWrapper {...props} onClick={handleClick}>
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
