import { getChannelPost } from '~/api/post';
import { CHANNEL_ID } from '~/constants/channelId';
import { Post } from '~/types';

export const getAllPosts = async (channelId: typeof CHANNEL_ID) => {
  return (
    await Promise.allSettled(
      Object.values(channelId).map((id) => getChannelPost(id, 0, 30))
    )
  )
    .filter(
      (result): result is PromiseFulfilledResult<Post[]> =>
        result.status === 'fulfilled'
    )
    .map((result) => result.value)
    .flat()
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
};
