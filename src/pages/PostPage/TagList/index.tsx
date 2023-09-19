import Tag from '../Tag';
import { TagListContainer } from './style';

const tags = [
  ['all', '전체'],
  ['love', '연애'],
  ['relationship', '인간관계'],
  ['job', '취업'],
  ['money', '돈'],
] as const;

interface TagListProps {
  onClick: (arg: string) => void;
}

const TagList = ({ onClick }: TagListProps) => {
  return (
    <>
      <TagListContainer>
        {tags.map(([key, value]) => (
          <Tag
            key={key}
            fontColor={'#F8FBFF'}
            borderRadius={'15px'}
            fontSize={'14px'}
            onClick={() => onClick(key)}
            style={{
              border: 'none',
              padding: '5px 15px',
              background:
                'linear-gradient(45deg,#FCCBF3, #E8CBF4, #B6CCF9, #72CDFF)',
              fontFamily: 'ONE-Mobile-Title',
            }}
          >
            {value}
          </Tag>
        ))}
      </TagListContainer>
      <div style={{ height: '32px' }} />
    </>
  );
};

export default TagList;
