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

interface Message {
  _id: string;
  message: string;
  sender: User;
  receiver: User;
  seen: boolean;
  createdAt: string;
  updatedAt: string;
}

interface User {
  role: string;
  emailVerified: boolean;
  banned: boolean;
  isOnline: boolean;
  posts: Post[];
  likes: Like[];
  comments: string[];
  followers?: [];
  following?: [];
  notifications: [];
  messages: Message[];
  _id: string;
  fullName: { mbti: string; intro: string };
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  username: string;
}

export interface USER {
  user: User;
}
