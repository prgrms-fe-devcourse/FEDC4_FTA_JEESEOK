import { AxiosResponse } from 'axios';
import request from '../index';

interface getChannelPost {
  (
    channelId: string,
    offset: number,
    limit: number
  ): Promise<AxiosResponse<Post[]> | undefined>;
}

interface getUserPost {
  (
    authorId: string,
    offset: number,
    limit: number
  ): Promise<AxiosResponse<Post[]> | undefined>;
}

interface readPost {
  (postId: string): Promise<AxiosResponse<Post> | undefined>;
}
/* reponse 모델 설정 */
interface Post {
  likes: Like[];
  comments: Comment[];
  _id: string;
  image?: string;
  imagePublicId?: string;
  title: string;
  channel: Channel;
  author: User;
  createdAt: string;
  updatedAt: string;
}

interface User {
  coverImage: string;
  image: string;
  role: string;
  emailVerified: boolean;
  banned: boolean;
  isOnline: boolean;
  posts: Post[];
  likes: Like[];
  comments: string[];
  followers: [];
  following: [
    {
      _id: string;
      user: string;
      follower: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    },
  ];
  notifications: Notification[];
  messages: Message[];
  _id: string;
  fullName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface Like {
  _id: string;
  user: string;
  post: string;
  createdAt: string;
  updatedAt: string;
}

interface Comment {
  _id: string;
  comment: string;
  author: User;
  post: string;
  createdAt: string;
  updatedAt: string;
}

interface Channel {
  authRequired: boolean;
  posts: string[];
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface Message {
  _id: string;
  message: string;
  sender: User;
  receiver: User;
  seen: boolean;
  createdAt: string;
  updatedAt: string;
}

// 특정 채널의 포스트 목록 불러오기
export const getChannelPost: getChannelPost = async (
  channelId,
  offset,
  limit
) => {
  try {
    const response = await request.get(`/posts/channel/${channelId}`, {
      params: {
        offset,
        limit,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

// 특정 사용자의 포스트 목록 불러오기
export const getUserPost: getUserPost = async (authorId, offset, limit) => {
  try {
    const response = request.get(`/posts/author/${authorId}`, {
      params: {
        offset,
        limit,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

// 특정 채널에 포스트 작성하기
export const writePost = async () => {
  try {
    await request.post('/posts/create');
  } catch (error) {
    console.error(error);
  }
};

// 특정 포스트 상세 보기
export const readPost: readPost = async (postId) => {
  try {
    const response = request.get(`/posts/${postId}`);

    return response;
  } catch (error) {
    console.error(error);
  }
};
