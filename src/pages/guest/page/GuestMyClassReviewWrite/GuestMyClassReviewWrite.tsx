import { ChangeEvent, useState } from 'react';

import { Button, Header, ImageSelect, TextArea } from '@components';
import { ClassListCard } from '@pages/classList/components';
import ClickableTag from 'src/components/common/ClickableTag/ClickableTag';

import {
  bigSpan,
  mainStyle,
  reviewWriteContainer,
  reviewWriteLayout,
  sectionTitleStyle,
  smallSpan,
  tagSectionStyle,
  tagWrapper,
  textareaAndImageWrapper,
  writeReviewSection,
} from './GuestMyClassReviewWrite.style';

import { components } from '@schema';

type MoimByCategoryResponse = components['schemas']['MoimByCategoryResponse'];

const moimData: MoimByCategoryResponse = {
  moimId: 1,
  dayOfDay: 1,
  title: '부산 10년 토박이 달아오르구마와 함께하는 사투리 모임',
  hostNickName: '달아오르구마',
  moimDate: '7월 6일 15:00',
  dateList: [
    {
      date: '2024.07.06',
      dayOfWeek: '토',
      startTime: '15:00',
      endTime: '18:00',
    },
  ],
  moimImageUrl: 'example.com',
  hostImageUrl: 'example.com',
};

const moimTag = [
  { tagName: '🎤 진행이 매끄러워요', isSelected: false },
  { tagName: '🤩 내용이 흥미로워요', isSelected: false },
  { tagName: '💼 전문성이 뛰어나요', isSelected: false },
  { tagName: '💬 네트워킹이 가능해요', isSelected: false },
  { tagName: '🤩 내용이 깊이 있어요', isSelected: false },
  { tagName: '👍 내용이 유익해요', isSelected: false },
  { tagName: '✨ 분위기가 좋아요', isSelected: false },
  { tagName: '✨ 장소가 깔끔해요', isSelected: false },
  { tagName: '👥 인원이 적절해요', isSelected: false },
  { tagName: '🎯 상호작용이 많아요', isSelected: false },
  { tagName: '📌 새로운 정보가 많아요', isSelected: false },
  { tagName: '💡 실제 사례가 많아요', isSelected: false },
];

const hostTag = [
  { tagName: '⏰ 시간 관리를 잘해요', isSelected: false },
  { tagName: '📢 정확한 정보를 제공해요', isSelected: false },
  { tagName: '🙋🏻 질문에 잘 답해줘요', isSelected: false },
  { tagName: '🙌🏻 분위기를 잘 이끌어요', isSelected: false },
  { tagName: '✅ 설명이 명확해요', isSelected: false },
  { tagName: '🔎 준비가 철저해요', isSelected: false },
  { tagName: '🗣 목소리가 좋아요', isSelected: false },
  { tagName: '📚 전문성이 있어요', isSelected: false },
  { tagName: '✈️ 진행이 매끄러워요', isSelected: false },
  { tagName: '✉️ 전달력이 좋아요', isSelected: false },
  { tagName: '⏳ 진행 속도가 적당해요', isSelected: false },
  { tagName: '👀 참여자의 반응을 잘 반영해요', isSelected: false },
];

const GuestMyClassReviewWrite = () => {
  const [value, setValue] = useState('');
  const [, setSelectedFiles] = useState<File[]>([]);
  const [moimTagList, setMoimTagList] = useState<string[]>([]);
  const [hostTagList, setHostTagList] = useState<string[]>([]);

  const handleMoimTagClick = (tag: string) => {
    setMoimTagList((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((t) => t !== tag);
      } else if (prevTags.length < 3) {
        return [...prevTags, tag];
      }
      return prevTags;
    });
  };

  const handleHostTagClick = (tag: string) => {
    setHostTagList((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((t) => t !== tag);
      } else if (prevTags.length < 3) {
        return [...prevTags, tag];
      }
      return prevTags;
    });
  };

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  console.log(moimTagList);
  return (
    <div css={reviewWriteLayout}>
      <Header title="리뷰 쓰기" />
      <div css={reviewWriteContainer}>
        <ClassListCard classListData={moimData} />
        <main css={mainStyle}>
          <section css={tagSectionStyle}>
            <div css={sectionTitleStyle}>
              <span css={bigSpan}>클래스는 어떠셨나요?</span>
              <span css={smallSpan}>최소 1개, 최대 3개</span>
            </div>
            <div css={tagWrapper}>
              {moimTag.map((tag) => (
                <ClickableTag
                  key={tag.tagName}
                  onClick={() => handleMoimTagClick(tag.tagName)}
                  isSelected={moimTagList.includes(tag.tagName)}>
                  {tag.tagName}
                </ClickableTag>
              ))}
            </div>
          </section>
          <section css={tagSectionStyle}>
            <div css={sectionTitleStyle}>
              <span css={bigSpan}>스픽커는 어떠셨나요?</span>
              <span css={smallSpan}>최소 1개, 최대 3개</span>
            </div>
            <div css={tagWrapper}>
              {hostTag.map((tag) => (
                <ClickableTag
                  key={tag.tagName}
                  onClick={() => handleHostTagClick(tag.tagName)}
                  isSelected={hostTagList.includes(tag.tagName)}>
                  {tag.tagName}
                </ClickableTag>
              ))}
            </div>
          </section>
          <section css={writeReviewSection}>
            <span css={bigSpan}>클래스에 함께한 경험을 공유해 주세요!</span>
            <div css={textareaAndImageWrapper}>
              <TextArea
                size="medium"
                maxLength={500}
                placeholder={'1글자 이상 리뷰를 작성해주세요.'}
                value={value}
                onChange={(e) => handleTextareaChange(e)}
                isValid={true}
                errorMessage="1글자 이상 리뷰를 작성해주세요."
              />
              <ImageSelect isMultiple={false} onFileSelect={setSelectedFiles} maxImageLength={1} />
            </div>
          </section>
        </main>
        <Button variant="large">리뷰 등록하기</Button>
      </div>
    </div>
  );
};

export default GuestMyClassReviewWrite;
