import { useParams } from 'react-router-dom';

const PostEditPage = () => {
  const { postId } = useParams();

  return <div>PostEditPage {postId}</div>;
};

export default PostEditPage;
