import { Post } from '~/types';
import request from '..';

interface EditPostRequest {
  postId: string;
  title: string;
  channelId: string;
}

interface EditPost {
  (editPostRequest: EditPostRequest): Promise<void | never>;
}

export const editPost: EditPost = async (editPostRequest) => {
  const { postId, title, channelId } = editPostRequest;
  const formData = new FormData();

  formData.append('postId', postId);
  formData.append('title', title);
  formData.append('channelId', channelId);

  const res = await request.put('/posts/update', formData);
  return res.data;
};

interface DeletePost {
  (id: string): Promise<void | never>;
}

export const deletePost: DeletePost = async (id) => {
  const res = await request.delete(`/posts/delete`, { data: { id } });

  return res.data;
};

interface getChannelPost {
  (channelId: string, offset: number, limit: number): Promise<Post[] | never>;
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

  return res.data;
};

interface getUserPost {
  (authorId: string, offset: number, limit: number): Promise<Post[] | never>;
}

// 특정 사용자의 포스트 목록 불러오기
export const getUserPost: getUserPost = async (authorId, offset, limit) => {
  const res = await request.get(`/posts/author/${authorId}`, {
    params: {
      offset,
      limit,
    },
  });

  return res.data;
};

interface writePost {
  (title: string, image: File | null, channelId: string): Promise<void | never>;
}

// 특정 채널에 포스트 작성하기
export const writePost: writePost = async (title, image, channelId) => {
  const formData = new FormData();
  formData.append('title', title);
  if (image) {
    formData.append('image', image);
  }
  formData.append('channelId', channelId);

  const res = await request.post('/posts/create', formData);

  return res.data;
};

interface readPost {
  (postId: string): Promise<Post | never>;
}

// 특정 포스트 상세 보기
export const readPost: readPost = async (postId) => {
  const res = await request.get(`/posts/${postId}`);

  return res.data;
};
