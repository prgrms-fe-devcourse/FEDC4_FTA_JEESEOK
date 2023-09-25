import Tag from '~/components/common/Tag';
import { TagListContainer } from './TagListStyle';

const tags = [
  ['all', '전체'],
  ['love', '연애'],
  ['relationship', '인간관계'],
  ['job', '취업'],
  ['money', '돈'],
] as const;

interface TagListProps {
  activeTag: string | undefined;
  onClick: (arg: string) => void;
}

const TagList = ({ activeTag, onClick }: TagListProps) => {
  const transformTag = (tag: string | undefined) => {
    if (!tag) return 'all';
    return tag.toLowerCase();
  };

  return (
    <>
      <TagListContainer>
        {tags.map(([key, value]) => (
          <Tag
            key={key}
            className={transformTag(activeTag) === key ? 'active' : ''}
            fontColor={'#F8FBFF'}
            backgroundColor={'#D9E4FB'}
            activeBackgroundColor={
              'linear-gradient(45deg,#FCCBF3, #E8CBF4, #B6CCF9, #72CDFF)'
            }
            borderRadius={'15px'}
            fontSize={'14px'}
            onClick={() => onClick(key)}
            style={{
              border: 'none',
              padding: '5px 15px',
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
