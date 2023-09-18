import styled from '@emotion/styled';
import Tag from './Tag';

const tags = [
  ['all', '전체'],
  ['love', '연애'],
  ['relationship', '인간관계'],
  ['job', '취업'],
  ['money', '돈'],
];

interface TagListProps {
  onClick: (arg: string) => void;
}

const TagList = ({ onClick }: TagListProps) => {
  return (
    <TagListContainer>
      {tags.map(([key, value]) => (
        <Tag
          key={key}
          fontColor={'#F8FBFF'}
          borderWidth={'1px'}
          borderRadius={'15px'}
          fontSize={'16px'}
          onClick={() => onClick(key)}
          style={{
            padding: '2px 15px',
            background:
              'linear-gradient(45deg,#FCCBF3, #E8CBF4, #B6CCF9, #72CDFF)',
          }}
        >
          {value}
        </Tag>
      ))}
    </TagListContainer>
  );
};

export default TagList;

const TagListContainer = styled.div`
  display: flex;
  gap: 5px;
  position: fixed;
  margin: 10px 10px 5px 10px;
  z-index: 777;
`;
