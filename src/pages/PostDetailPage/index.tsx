import { useParams } from 'react-router-dom';

const PostDetailPage = () => {
  const { postId } = useParams();

  return <div>PostDetailPage {postId}</div>;
};

export default PostDetailPage;
