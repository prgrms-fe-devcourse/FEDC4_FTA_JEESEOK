import { AxiosResponse } from 'axios';
import request from '~/api';

interface Message {
  _id: string;
  message: string;
  sender: User;
  receiver: User;
  seen: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Like {
  _id: string;
  user: string; // 사용자 id
  post: string; // 포스트 id
  createdAt: string;
  updatedAt: string;
}

interface Channel {
  authRequired: boolean; // 사용되지 않음
  posts: string[];
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface Notification {
  seen: boolean;
  _id: string;
  author: User;
  user: User | string;
  post: string | null; // 포스트 id
  follow?: string; // 사용자 id
  comment?: Comment;
  message?: string; // 메시지 id
  createdAt: string;
  updatedAt: string;
}

interface Comment {
  _id: string;
  comment: string;
  author: User;
  post: string; // 포스트 id
  createdAt: string;
  updatedAt: string;
}

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

interface GetUsers {
  (offset: number, limit: number): Promise<AxiosResponse<User[]>>;
}

export const getUsers: GetUsers = async (offset = 0, limit = 10) => {
  const result = await request.get<User[]>(
    `/users/get-users?offset=${offset}&limit=${limit}`
  );

  return result;
};

interface GetUser {
  (userId: string): Promise<AxiosResponse<User>>;
}

export const getUser: GetUser = async (userId) => {
  const result = await request.get<User>(`/users/${userId}`);

  return result;
};

// interface Image {
//   isCover: boolean;
//   image: string;
// }

interface PostUserImage {
  (jwt: string, imgae: string): Promise<AxiosResponse<User>>;
}

export const postUserImage: PostUserImage = async (jwt, image) => {
  const result = await request.post<User>(
    '/users/upload-photo',
    {
      isCover: false,
      image,
    },
    {
      headers: {
        Authorization: `bearer ${jwt}`,
      },
    }
  );

  return result;
};

interface PostUserIntroduction {
  (jwt: string, image: string): Promise<AxiosResponse<User>>;
}

export const postUserIntroduction: PostUserIntroduction = async (
  jwt,
  image
) => {
  const result = await request.post<User>(
    '/users/upload-photo',
    {
      isCover: true,
      image,
    },
    {
      headers: {
        Authorization: `bearer ${jwt}`,
      },
    }
  );

  return result;
};
