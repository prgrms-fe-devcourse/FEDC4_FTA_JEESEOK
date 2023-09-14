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
          backgroundColor={'white'}
          borderWidth={'1px'}
          borderRadius={'15px'}
          fontSize={'16px'}
          onClick={() => onClick(key)}
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
  margin-left: 5px;
  margin-top: 5px;
`;
