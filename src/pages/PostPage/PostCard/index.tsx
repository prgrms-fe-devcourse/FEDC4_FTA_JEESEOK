import { useNavigate } from 'react-router-dom';
import Image from '~/components/common/Image';
import commentImg from '~/pages/PostPage/assets/comment.svg';
import heartImg from '~/pages/PostPage/assets/heart.svg';
import {
  Comment,
  CountContainer,
  CreatedDate,
  DateUserArea,
  Like,
  PostCardContainer,
  Tag,
  TagTitleArea,
  TagTitleCountArea,
  Title,
  UserNameMbti,
} from './style';

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
