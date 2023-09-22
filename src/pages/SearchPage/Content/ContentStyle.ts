import styled from '@emotion/styled';
import UserCard from '~/components/search/UserCard';

export const ContentWrapper = styled.div`
  flex-grow: 1;
  background-color: #e6efff;
  overflow: hidden;
  position: relative;
`;

export const TopNavWrapper = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 20px;
  margin-bottom: 10px;
  gap: 10px;
`;

export const NoWordWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 230px;
  transform: translate(-50%, -50%);
  font-family: 'ONE-Mobile-Title';
  color: #2f2f68;
  font-size: 22px;
  text-align: center;
`;

export const PostCardGroup = styled.div`
  height: calc(100% - 88px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 95%;
  margin: 0 auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #e6efff;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #fccbf3, #e8cbf4, #b6ccf9, #72cdff);
    border-radius: 5px;
  }
`;

export const UserCardGroup = styled(UserCard.Group)`
  height: calc(100% - 88px);
  overflow-y: auto;
  width: 95%;
  margin: 0 auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #e6efff;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #fccbf3, #e8cbf4, #b6ccf9, #72cdff);
    border-radius: 5px;
  }
`;
