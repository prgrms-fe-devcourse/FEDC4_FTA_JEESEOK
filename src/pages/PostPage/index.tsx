import { useParams } from 'react-router-dom';

const PostPage = () => {
  const { postId } = useParams();

  return <div>PostPage {postId}</div>;
};

export default PostPage;
