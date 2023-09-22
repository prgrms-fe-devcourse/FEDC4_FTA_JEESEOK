import styled from '@emotion/styled';
import Tag from '~/components/common/Tag';
import Textarea from '~/pages/PostEditPage/Textarea';

export const PostEditPageWrapper = styled.div`
  width: 100%;
`;

export const PostEditPageTag = styled(Tag)`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border: none;

  margin-right: 5px;

  background: linear-gradient(
    45deg,
    rgba(252, 203, 243, 0.2),
    rgba(232, 203, 244, 0.2),
    rgba(182, 204, 249, 0.2),
    rgba(114, 205, 255, 0.2)
  );

  overflow: hidden;
  white-space: nowrap;
  font-family: GangwonEdu_OTFBoldA;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  font-size: 0.7rem;
`;

interface PostEditPageTextareaProps {
  backgroundColor: string;
}

export const PostEditPageTextarea = styled(Textarea)<PostEditPageTextareaProps>`
  border: none;
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-family: GangwonEdu_OTFBoldA;
  box-sizing: border-box;
  padding-top: 6px;
  padding-left: 12px;
  caret-color: #2f2f68;
  ::placeholder {
    color: #8b9dc6;
    font-family: GangwonEdu_OTFBoldA;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const PostEditPageMainWrapper = styled.div`
  max-width: 425px;
  min-height: 500px;
  position: relative;
  top: 25px;
  margin: 0 auto;
  width: calc(100% - 20px);
  height: calc(100vh - 250px);
  background-color: #f5f9ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 10px;
  box-sizing: content-box;
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px rgba(245, 249, 255, 0.1);
`;

export const PostEditPageTagWrapper = styled.div`
  width: calc(100% - 40px);
  display: flex;
  justify-content: flex-start;
`;

interface PostEditPageHeadingProps {
  marginBottom: string;
}

export const PostEditPageHeading = styled('h1')<PostEditPageHeadingProps>`
  font-family: GangwonEdu_OTFBoldA;
  width: calc(100% - 40px);
  display: flex;
  justify-content: flex-start;
  margin-bottom: ${({ marginBottom }) => marginBottom};
`;

interface PostEditPageHorizontalLineProps {
  marginTop: string;
}

export const PostEditPageHorizontalLine = styled(
  'div'
)<PostEditPageHorizontalLineProps>`
  position: relative;
  margin: 0 auto;
  width: calc(100% - 20px);
  height: 1px;
  background-color: #bbcdf7;
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: 16px;
`;

export const PostEditPageInput = styled('input')`
  border: none;
  font-family: GangwonEdu_OTFBoldA;
  color: #8b9dc6;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: #f5f9ff;
  width: calc(100% - 40px);
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #8b9dc6;
  }
`;
