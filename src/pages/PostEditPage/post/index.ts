import { AxiosResponse } from 'axios';
import request from '~/api';
import { Post } from '~/types';

interface EditPostRequest {
  postId: string;
  title: string;
  channelId: string;
}

interface EditPost {
  (editPostRequest: EditPostRequest): Promise<AxiosResponse<false | void>>;
}

export const editPost: EditPost = async (editPostRequest) => {
  const { postId, title, channelId } = editPostRequest;
  const formData = new FormData();

  formData.append('postId', postId);
  formData.append('title', title);
  formData.append('channelId', channelId);

  const data = await request.put('/posts/update', formData);
  return data;
};

interface DeletePost {
  (id: string): Promise<AxiosResponse<false | void>>;
}

export const deletePost: DeletePost = async (id) => {
  const data = await request.delete(`/posts/delete`, { data: { id } });

  return data;
};

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
    image: File | null,
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
  if (image) {
    formData.append('image', image);
  }
  formData.append('channelId', channelId);

  const res = await request.post('/posts/create', formData);

  return res;
};

// 특정 포스트 상세 보기
export const readPost: readPost = async (postId) => {
  const res = await request.get(`/posts/${postId}`);

  return res;
};
