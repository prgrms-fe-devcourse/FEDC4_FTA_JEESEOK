import { Post } from '~/types';
import {
  Comment,
  CountContainer,
  CreatedDate,
  DateUserArea,
  Like,
  PostCardContainer,
  Title,
  TitleCountArea,
} from './PostCardStyle';

type PostCardProps = Pick<
  Post,
  '_id' | 'title' | 'channel' | 'createdAt' | 'likes' | 'comments'
> & {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const CHANNEL_ID = Object.freeze({
  '64f57dd474128417c2689170': '연애',
  '64f96db08a4e9a3147d9117a': '인간관계',
  '64f57dc874128417c268916c': '취업',
  '64f96d8e8a4e9a3147d91176': '돈',
});

const PostCard = ({
  _id,
  title,
  comments,
  likes,
  channel,
  createdAt,
  onClick,
}: PostCardProps) => {
  return (
    <PostCardContainer id={_id} onClick={onClick}>
      <TitleCountArea>
        <div style={{ display: 'flex', gap: '5px' }}>
          <span>{CHANNEL_ID[channel]}</span>
          <Title>{title}</Title>
        </div>
        <CountContainer>
          <Like>공감 {likes.length}</Like>
          <Comment>댓글 {comments.length}</Comment>
        </CountContainer>
      </TitleCountArea>
      <DateUserArea>
        <CreatedDate>{createdAt}</CreatedDate>
      </DateUserArea>
    </PostCardContainer>
  );
};

export default PostCard;
