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
  user: string;
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

interface Notification {
  seen: boolean;
  _id: string;
  author: User;
  user: User | string;
  post: string | null;
  follow?: string;
  comment?: Comment;
  message?: string;
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

interface PutMyInformation {
  (
    jwt: string,
    fullName: string,
    username: string
  ): Promise<AxiosResponse<User>>;
}

export const putMyInformation: PutMyInformation = async (
  jwt,
  fullName,
  username
) => {
  const result = await request.put<User>(
    '/settings/update-user',
    {
      fullName,
      username,
    },
    {
      headers: {
        Authorization: `bearer ${jwt}`,
      },
    }
  );

  return result;
};

interface Password {
  password: string;
}

interface PutPassword {
  (jwt: string, password: string): void;
}

export const putPassword: PutPassword = async (jwt, password) => {
  const result = await request.put<Password>(
    '/settings/update-password',
    { password },
    {
      headers: {
        Authorization: `bearer ${jwt}`,
      },
    }
  );

  return result;
};
