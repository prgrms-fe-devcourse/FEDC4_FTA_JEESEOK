import { useParams } from 'react-router-dom';

const UserPage = () => {
  const { userId } = useParams();

  return <div>UserPage {userId}</div>;
};

export default UserPage;
