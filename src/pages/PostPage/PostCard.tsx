import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Image from '~/components/common/Image';
import commentImg from './comment.svg';
import heartImg from './heart.svg';

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
          <Like>
            <Image src={heartImg} width={14} height={13} />
            <span>{likesNumber}</span>
          </Like>
          <Comment>
            <Image src={commentImg} width={14} height={13} />{' '}
            <span>{commentsNumber}</span>
          </Comment>
        </CountContainer>
      </TagTitleCountArea>
      <DateUserArea>
        <CreatedDate>{createdAt}</CreatedDate>
        <UserNameMbti>
          <span>{username}</span>
          <span>{mbti}</span>
        </UserNameMbti>
      </DateUserArea>
    </PostCardContainer>
  );
};

export default PostCard;

const PostCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 15px;
  padding: 10px;
  background-color: #f5f9ff;
  font-family: 'GangwonEdu_OTFBoldA';
  font-size: 14px;
  color: #494984;
  cursor: pointer;
`;

const TagTitleCountArea = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;

const TagTitleArea = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
`;

const Tag = styled.div`
  flex-shrink: 0;
  padding: 3px 5px;
  border-radius: 15px;
  background: linear-gradient(45deg, #fccbf3, #e8cbf4, #b6ccf9, #72cdff);
  color: #f8fbff;
  font-family: 'ONE-Mobile-Title';
  font-size: 12px;
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
  flex-shrink: 0;
  display: flex;
  gap: 5px;
`;

const Comment = styled.div`
  flex-shrink: 0;
  display: flex;
  gap: 5px;
`;

const DateUserArea = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;

const CreatedDate = styled.div``;

const UserNameMbti = styled.div`
  display: flex;
  gap: 5px;
`;
