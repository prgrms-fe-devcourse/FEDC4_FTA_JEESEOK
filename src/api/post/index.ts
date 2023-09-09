import { AxiosResponse } from 'axios';
import request from '..';

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
