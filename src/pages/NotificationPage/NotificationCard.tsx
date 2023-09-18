import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Comment, Like, User } from '~/types';
import { getKoreaTimeFromNow } from '~/utils';

interface NotificationCardProps {
  seen: boolean;
  author: User;
  comment?: Comment;
  like?: Like;
  post: string | null;
  createdAt: string;
}

const NotificationCard = ({
  seen,
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

  return !seen ? (
    <NotificationCardContainer onClick={handleNotificationCardClick}>
      <CountContainer>
        <UserName>{author.username}</UserName>
        {like && <Text>님이 회원님의 게시물에 공감합니다.</Text>}
        {comment && <Text>님이 회원님의 게시물에 댓글을 남겼습니다.</Text>}
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
  border: 1px solid black;
  padding: 10px;
  background-color: white;
  cursor: pointer;
`;

const CountContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const Text = styled.div`
  flex-shrink: 0;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  text-overflow: ellipsis;
`;

const DateArea = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
`;

const CreatedDate = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
`;

const UserName = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
`;
