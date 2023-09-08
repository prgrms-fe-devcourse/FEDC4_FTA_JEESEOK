import request from '..';

interface EditPost {
  postId: string;
  title: string;
  channelId: string;
}

export const editPost = async ({
  postId,
  title,
  channelId,
}: EditPost): Promise<false | void> => {
  try {
    const formData = new FormData();

    formData.append('postId', postId);
    formData.append('title', title);
    formData.append('channelId', channelId);

    await request.put('/posts/update', formData);
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const deletePost = async (id: string): Promise<false | void> => {
  try {
    await request.delete(`/posts/delete`, { data: { id } });
  } catch (error) {
    console.error(error);
    return false;
  }
};
