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
  padding: 5px 10px;
  height: 70px;
  box-sizing: border-box;
  cursor: pointer;
  background-color: #f5f9ff;
  border-radius: 15px;
  color: #2f2f68;
`;

export const Text = styled.div`
  padding-left: 20px;
  flex-grow: 1;
  font-size: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: 'GangwonEdu_OTFBoldA';
`;

export const MbtiTag = styled.div`
  font-size: 18px;
  text-align: center;
  box-sizing: border-box;
  font-family: 'MainFont';
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
