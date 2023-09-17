import { Channel, Comment, Like, User } from '~/types';

export const initPostDetailState = {
  likes: [] as Like[],
  comments: [] as Comment[],
  _id: '',
  title: '',
  channel: {} as Channel,
  author: {} as User,
  createdAt: '',
  updatedAt: '',
};

export const initLikeState = {
  likeId: '',
  isLike: false,
};

export const loginPlaceholder = '댓글을 입력해 주세요';
export const nonLoginPlaceholder = '로그인해주세요';
