import request from '..';

interface EditPost {
  postId: string;
  title: string;
  image?: undefined | null;
  channelId: string;
}

interface DeletePost {
  id: string;
}

export const editPost = async ({
  postId,
  title,
  image,
  channelId,
}: EditPost) => {
  try {
    await request.put('/posts/update', {
      data: {
        postId,
        title,
        image,
        channelId,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = async (id: DeletePost) => {
  try {
    await request.delete(`/posts/delete`, {
      data: {
        id,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
