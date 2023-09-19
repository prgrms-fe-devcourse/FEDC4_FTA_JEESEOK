import defaultProfile from '~/assets/default_profile.svg';
import likeCancelImage from '~/assets/like_type1.svg';
import likeImage from '~/assets/like_type2.svg';
import {
  Img,
  ImgWrapper,
  LikeImg,
  LikeWrapper,
  PostDetailContainer,
  PostDetailWrapper,
  Tag,
  Text,
  TextWrapper,
  TitleContainer,
  TitleWrapper,
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
          <ImgWrapper>
            <Img
              src={author?.coverImage ? author?.coverImage : defaultProfile}
            ></Img>
          </ImgWrapper>
          {/*<Image*/}
          {/*  width={60}*/}
          {/*  height={37}*/}
          {/*  src={author?.coverImage ? author?.coverImage : defaultProfile}*/}
          {/*/>*/}
          <TitleContainer>
            <Text fontSize={'14px'} color={'#2F2F68'}>
              {author?.username}
            </Text>
            <TextWrapper>
              <Text
                fontSize={'11px'}
                margin={'0 5px 0 0'}
                center={true}
                color={'#93A6C9'}
              >
                {updateAt}
              </Text>
              <Tag>{channelName}</Tag>
            </TextWrapper>
          </TitleContainer>
        </UserContainer>
        <TitleWrapper>
          <Text fontSize={'20px'} color={'#2F2F68'}>
            {title}
          </Text>
        </TitleWrapper>

        <Text fontSize={'14px'} color={'#494984'}>
          {body}
        </Text>
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
