import Tag from './Tag';

const tags = [
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
    <div>
      {tags.map(([key, value]) => (
        <Tag key={key} onClick={() => onClick(key)}>
          {value}
        </Tag>
      ))}
    </div>
  );
};

export default TagList;
