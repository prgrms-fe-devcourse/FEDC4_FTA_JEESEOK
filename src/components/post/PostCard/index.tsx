import { useNavigate } from 'react-router-dom';
import defaultProfileImg from '~/assets/default_profile.svg';
import Image from '~/components/common/Image';
import commentImg from '../assets/comment.svg';
import heartImg from '../assets/heart.svg';
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
  UserImage,
  UserNameMbti,
} from './style';

interface PostCardProps {
  id: string;
  tag: string;
  title: string;
  likesNumber: number;
  commentsNumber: number;
  userImage?: string;
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
  userImage,
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
            <Image src={commentImg} width={14} height={13} />
            <span>{commentsNumber}</span>
          </Comment>
        </CountContainer>
      </TagTitleCountArea>
      <DateUserArea>
        <CreatedDate>{createdAt}</CreatedDate>
        <UserNameMbti>
          <UserImage src={userImage || defaultProfileImg} />
          <span>{username}</span>
          <span>{mbti}</span>
        </UserNameMbti>
      </DateUserArea>
    </PostCardContainer>
  );
};

export default PostCard;
