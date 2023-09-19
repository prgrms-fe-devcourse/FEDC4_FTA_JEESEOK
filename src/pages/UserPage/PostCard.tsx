import comment from '~/pages/PostPage/assets/comment.svg';
import heart from '~/pages/PostPage/assets/heart.svg';
import { Post } from '~/types';
import {
  Comment,
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
          <div
            style={{
              background:
                'linear-gradient(45deg, #FCCBF3, #E8CBF4, #B6CCF9, #72CDFF)',
              padding: '2px 7px',
              borderRadius: '20px',
              color: 'white',
            }}
          >
            <span>{CHANNEL_ID[channel]}</span>
          </div>
          <Title>{title}</Title>
        </div>
      </TitleCountArea>
      <DateUserArea>
        <CreatedDate>{createdAt}</CreatedDate>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '3px' }}>
          <Like>
            <img src={heart} width={'14px'} height={'13px'} />
            {likes.length}
          </Like>
          <Comment>
            <img src={comment} width={'14px'} height={'13px'} />
            {comments.length}
          </Comment>
        </div>
      </DateUserArea>
    </PostCardContainer>
  );
};

export default PostCard;
