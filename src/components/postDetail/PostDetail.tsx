import defaultProfile from '~/assets/default_profile.svg';
import likeCancelImage from '~/assets/like_type1.svg';
import likeImage from '~/assets/like_type2.svg';
import Image from '~/components/common/Image';
import {
  LikeImg,
  LikeWrapper,
  PostDetailContainer,
  PostDetailWrapper,
  Text,
  TitleContainer,
  UserContainer,
} from '~/components/postDetail/postDetailStyle.ts';
import { User } from '~/types';

interface postDetailProps {
  channelName: string;
  title: string;
  body: string;
  author: User;
  likeCount: number;
  updateAt: string;
  onLikeClick: () => void;
  isLike: boolean;
}

const PostDetail = ({
  channelName,
  title,
  body,
  author,
  likeCount,
  updateAt,
  onLikeClick,
  isLike,
}: postDetailProps) => {
  return (
    <PostDetailContainer>
      <PostDetailWrapper>
        <UserContainer>
          <Image
            width={60}
            height={37}
            src={author?.coverImage ? author?.coverImage : defaultProfile}
          />
          <TitleContainer>
            <Text fontSize={'14px'} fontFamily={'gang-won-gyo-yug-modu-bold'}>
              {author?.username}
            </Text>
            <Text fontSize={'11px'}>
              {updateAt}
              <Text fontSize={'10px'}>{channelName}</Text>
            </Text>
          </TitleContainer>
        </UserContainer>
        <Text
          fontSize={'20px'}
          bold={'semi bold'}
          margin={`10px 0px 10px 0px}`}
        >
          {title}
        </Text>
        <Text fontSize={'14px'}>{body}</Text>
        <LikeWrapper>
          <LikeImg
            src={isLike ? likeImage : likeCancelImage}
            onClick={onLikeClick}
          ></LikeImg>
          <Text>{likeCount}</Text>
        </LikeWrapper>
      </PostDetailWrapper>
    </PostDetailContainer>
  );
};

export default PostDetail;
