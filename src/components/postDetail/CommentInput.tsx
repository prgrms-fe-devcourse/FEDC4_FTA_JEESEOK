import { useRef } from 'react';
import arrowBtn from '~/assets/arrow.svg';
import {
  CommentButton,
  CommentButtonWrap,
  CommentInputContainer,
  CommentInputStyle,
  CommentInputWrap,
} from '~/components/postDetail/commentStyle.ts';

interface CommentInputProps {
  onChange: (value: string) => void;
  onClick: () => void;
  value: string;
  isDisabled: boolean;
  placeholder: string;
}

const CommentInput = ({
  onChange,
  onClick,
  value,
  isDisabled,
  placeholder,
}: CommentInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (value: string) => {
    if (textareaRef.current) {
      if (textareaRef.current.scrollHeight >= 34) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
      if (value === '') {
        textareaRef.current.style.height = `20px`;
      }
      onChange(value);
    }
  };

  return (
    <CommentInputContainer>
      <CommentInputWrap>
        <CommentInputStyle
          ref={textareaRef}
          onChange={(e) => handleInputChange(e.target.value)}
          value={value}
          disabled={isDisabled}
          placeholder={placeholder}
        />
      </CommentInputWrap>
      <CommentButtonWrap onClick={onClick}>
        <CommentButton src={arrowBtn}></CommentButton>
      </CommentButtonWrap>
    </CommentInputContainer>
  );
};
export default CommentInput;
