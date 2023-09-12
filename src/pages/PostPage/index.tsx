import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getChannelPost } from '~/api/post';
import { Post } from '~/types';

const CHANEL_LOVE_ID = '64f57dd474128417c2689170';
const CHANEL_RELATIONSHIP_ID = '64f96db08a4e9a3147d9117a';
const CHANEL_JOB_ID = '64f57dc874128417c268916c';
const CHANEL_MONEY_ID = '64f96d8e8a4e9a3147d91176';

const PostPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getCP = async () => {
      const data = await getChannelPost(CHANEL_LOVE_ID, 0, 10);
      console.log(data);
    };

    getCP();
  });

  return <div>PostPage</div>;
};

export default PostPage;
