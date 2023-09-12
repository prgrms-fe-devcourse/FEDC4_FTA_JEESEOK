import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

interface PostCardProps {
  id: string;
  tag: string;
  title: string;
  likesNumber: number;
  commentsNumber: number;
  username: string;
  mbti: string;
  createdAt: string;
}

const PostCard = ({
  id,
  tag,
  title,
  likesNumber,
  commentsNumber,
  username,
  mbti,
  createdAt,
}: PostCardProps) => {
  const navigate = useNavigate();

  const handlePostCardClick = () => {
    navigate(`/post/${id}`);
  };

  return (
    <PostCardContainer onClick={handlePostCardClick}>
      <TagTitleCountArea>
        <TagTitleArea>
          <Tag>{tag}</Tag>
          <Title>{title}</Title>
        </TagTitleArea>
        <CountContainer>
          <Like>공감 {likesNumber}</Like>
          <Comment>댓글 {commentsNumber}</Comment>
        </CountContainer>
      </TagTitleCountArea>
      <DateUserArea>
        <CreatedDate>{createdAt}</CreatedDate>
        <UserName>
          {username} {mbti}
        </UserName>
      </DateUserArea>
    </PostCardContainer>
  );
};

export default PostCard;

const PostCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
  background-color: white;
  cursor: pointer;
`;

const TagTitleCountArea = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;

const TagTitleArea = styled.div`
  display: flex;
  gap: 5px;
`;

const Tag = styled.div`
  flex-shrink: 0;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const CountContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const Like = styled.div`
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Comment = styled.div`
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const DateUserArea = styled.div`
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
