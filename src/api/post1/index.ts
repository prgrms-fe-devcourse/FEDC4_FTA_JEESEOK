import { AxiosResponse } from 'axios';
import request from '~/api';
import { Post } from '~/types';

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

interface writePost {
  (
    title: string,
    image: File,
    channelId: string
  ): Promise<AxiosResponse<void> | undefined>;
}

interface readPost {
  (postId: string): Promise<AxiosResponse<Post> | undefined>;
}

// 특정 채널의 포스트 목록 불러오기
export const getChannelPost: getChannelPost = async (
  channelId,
  offset,
  limit
) => {
  const res = await request.get(`/posts/channel/${channelId}`, {
    params: {
      offset,
      limit,
    },
  });

  return res;
};

// 특정 사용자의 포스트 목록 불러오기
export const getUserPost: getUserPost = async (authorId, offset, limit) => {
  const res = await request.get(`/posts/author/${authorId}`, {
    params: {
      offset,
      limit,
    },
  });

  return res;
};

// 특정 채널에 포스트 작성하기
export const writePost: writePost = async (title, image, channelId) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('image', image);
  formData.append('channelId', channelId);

  const res = await request.post('/posts/create', formData);

  return res;
};

// 특정 포스트 상세 보기
export const readPost: readPost = async (postId) => {
  const res = await request.get(`/posts/${postId}`);

  return res;
};
