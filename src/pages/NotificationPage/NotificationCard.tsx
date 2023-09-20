import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Comment, Like, User } from '~/types';
import { getKoreaTimeFromNow } from '~/utils';

interface NotificationCardProps {
  author: User;
  comment?: Comment;
  like?: Like;
  post: string | null;
  createdAt: string;
}

const NotificationCard = ({
  author,
  post,
  comment,
  createdAt,
  like,
}: NotificationCardProps) => {
  const navigate = useNavigate();

  const handleNotificationCardClick = () => {
    if (typeof post === 'string') {
      navigate(`/post/${post}`);
    }
  };

  const isLike = !like;
  const isComment = !comment;

  return !isLike || !isComment ? (
    <NotificationCardContainer onClick={handleNotificationCardClick}>
      <CountContainer>
        <UserName>{author.username}님이</UserName>
        {like && <Text>회원님의 게시글에 공감합니다.</Text>}
        {comment && <Text>회원님의 게시글에 댓글을 남겼습니다.</Text>}
      </CountContainer>
      <DateArea>
        <CreatedDate>{getKoreaTimeFromNow(createdAt)}</CreatedDate>
      </DateArea>
    </NotificationCardContainer>
  ) : (
    <></>
  );
};

export default NotificationCard;

const NotificationCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 58px;
  width: calc(100% - 20px);
  border-radius: 25px;
  padding: 10px;
  background-color: #f5f9ff;
  cursor: pointer;
  font-family: 'GangwonEdu_OTFBoldA';
  margin-top: 8px;
  padding: 18px 20px 22px 16px;
  box-sizing: border-box;
`;

const CountContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const Text = styled.div`
  width: 250px;
  position: relative;
  right: 10px;
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0);
  text-overflow: ellipsis;
`;

const DateArea = styled.div``;

const CreatedDate = styled.div`
  background-color: rgba(0, 0, 0, 0);
`;

const UserName = styled.div`
  background-color: rgba(0, 0, 0, 0);
`;
