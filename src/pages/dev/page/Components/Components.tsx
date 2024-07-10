import {
  Button,
  Carousel,
  CategoryButton,
  ClipboardCopyButton,
  DateSelect,
  FilterSelect,
  Header,
  IconButton,
  Input,
  InterestCategoryButton,
  Label,
  Notice,
  NumberLabel,
  PayButton,
  ProgressBar,
  QuestionInput,
  QuestionText,
  Select,
  SelectButton,
  ShareButton,
  SocialLoginButton,
  TextArea,
  Image,
  LogoHeader,
  ApplicantAccordionList,
  TimeSelect,
  ImageSelect,
  CountPeople,
  NavigateBox,
  //Modal,
  Toast,
} from '@components';

import {
  IcAccordion,
  IcApplicantArrcodion,
  IcBtnMinus,
  IcBtnPlus,
  IcCameraAdd,
  IcCheckActive,
  IcCheckDefault,
  IcClipboardCopy,
  IcCopyPlus,
  IcDefaultUserimg,
  IcDeletePhoto,
  IcDown,
  IcDropDown,
  IcDropUp,
  IcExclamation,
  IcHome,
  IcHouse,
  IcKakaoLogo,
  IcKakaoPay,
  IcLogo,
  IcNjob,
  IcNumberLabel,
  IcPerson,
  IcRouteArrow,
  IcShare,
  IcTossPay,
  IcCountCircle,
  IcPlus,
} from '@svg';

import {
  iconSvgStyle,
  iconWrapperStyle,
  devContainer,
  secttionContainer,
  titleStyle,
  subTitleStyle,
  iconContainerStyle,
  textStyle,
} from './Components.style';
import { useState } from 'react';
import SimpleUserProfile from 'src/components/common/SimpleUserProfile/SimpleUserProfile';
import useToast from 'src/hooks/useToast';

const Dev = () => {
  const [value, setValue] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const [people, setPeople] = useState(7);
  const handlePeopleChange = (newCount: number) => {
    setPeople(newCount);
    console.log(people);
  };
  const { showToast, isToastVisible } = useToast();

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const imageList = [
    'https://placehold.co/600x400',
    'https://placehold.co/600x400',
    'https://placehold.co/600x400',
    'https://placehold.co/600x400',
    'https://placehold.co/600x400',
  ];

  return (
    <div css={devContainer}>
      <div>
        <section css={secttionContainer}>
          <h2 css={titleStyle}>icon</h2>

          <div css={iconContainerStyle}>
            <div css={iconWrapperStyle}>
              <IcAccordion css={iconSvgStyle} />
              <span>accordion</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcApplicantArrcodion css={iconSvgStyle} />
              <span>applicantArrcodio</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcBtnMinus css={iconSvgStyle} />
              <span>btnMinu</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcBtnPlus css={iconSvgStyle} />
              <span>btnPlus</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcCameraAdd css={iconSvgStyle} />
              <span>cameraAdd</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcCheckActive css={iconSvgStyle} />
              <span>checkActive</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcCheckDefault css={iconSvgStyle} />
              <span>checkDefault</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcClipboardCopy css={iconSvgStyle} />
              <span>clipboardCopy</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcCopyPlus css={iconSvgStyle} />
              <span>copyPlus</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcCountCircle css={iconSvgStyle} />
              <span>countCircle</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcDefaultUserimg css={iconSvgStyle} />
              <span>defaultUserimg</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcDeletePhoto css={iconSvgStyle} />
              <span>deletePhoto</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcDown css={iconSvgStyle} />
              <span>down</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcDropDown css={iconSvgStyle} />
              <span>dropDown</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcDropUp css={iconSvgStyle} />
              <span>dropUp</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcExclamation css={iconSvgStyle} />
              <span>exclamation</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcHome css={iconSvgStyle} />
              <span>home</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcHouse css={iconSvgStyle} />
              <span>house</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcKakaoLogo css={iconSvgStyle} />
              <span>kakaoLogo</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcKakaoPay css={iconSvgStyle} />
              <span>kakaoPay</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcLogo css={iconSvgStyle} />
              <span>logo</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcNjob css={iconSvgStyle} />
              <span>njob</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcNumberLabel css={iconSvgStyle} />
              <span>numberLabel</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcPerson css={iconSvgStyle} />
              <span>person</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcPlus css={iconSvgStyle} />
              <span>plus</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcRouteArrow css={iconSvgStyle} />
              <span>routeArrow</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcShare css={iconSvgStyle} />
              <span>share</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcTossPay css={iconSvgStyle} />
              <span>tossPay</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcLogo css={iconSvgStyle} />
              <span>logo</span>
            </div>
          </div>
        </section>

        <section css={secttionContainer}>
          <h2 css={titleStyle}>label</h2>

          <h3 css={subTitleStyle}>numberlaber</h3>
          <NumberLabel>1</NumberLabel>

          <h3 css={subTitleStyle}>label</h3>
          <span css={textStyle}>variant='status'</span>
          <Label variant="status">status</Label>

          <span css={textStyle}>variant='dDay'</span>
          <Label variant="dDay">dDay</Label>

          <span css={textStyle}>variant='category'</span>
          <Label variant="category">category</Label>

          <span css={textStyle}>variant='textCount'</span>
          <Label variant="textCount">textCount</Label>
        </section>

        <section css={secttionContainer}>
          <h2 css={titleStyle}>Notice</h2>
          <Notice numberLabel="1">
            모임 참여 전, 호스트가 게시하는 <br />
            공지사항을 꼼꼼히 확인해주세요.
          </Notice>
        </section>

        <section css={secttionContainer}>
          <h2 css={titleStyle}>QuestionText</h2>
          <QuestionText numberLabel="Q1">왜 이 모임에 들어오고 싶나요?</QuestionText>
        </section>

        <section css={secttionContainer}>
          <h2 css={titleStyle}>CountPeople</h2>
          <CountPeople people={people} onPeopleChange={handlePeopleChange} />
        </section>

        <section css={secttionContainer}>
          <h2 css={titleStyle}>Toast</h2>
          <button onClick={showToast}>토스트 나타나라!</button>
          <Toast toastIcon={true} isVisible={isToastVisible} toastBottom={3}>
            신청 마감일 이후에 신청자를 승인할 수 있어요.
          </Toast>
        </section>
      </div>

      <div>
        <section css={secttionContainer}>
          <h2 css={titleStyle}>button</h2>

          <h3 css={subTitleStyle}>Button</h3>

          <span css={textStyle}>size = xxSmall</span>
          <Button size="xxSmall">버튼</Button>

          <span css={textStyle}>size = xSmall</span>
          <Button size="xSmall">버튼</Button>

          <span css={textStyle}>size = small</span>
          <Button size="small">버튼</Button>

          <span css={textStyle}>size = medium</span>
          <Button size="medium">버튼</Button>

          <span css={textStyle}>size = large</span>
          <Button size="large">버튼</Button>

          <span css={textStyle}>size = xLarge</span>
          <Button size="xLarge">버튼</Button>

          <h3 css={subTitleStyle}>PayButton</h3>
          <span css={textStyle}>variant="toss"</span>
          <PayButton variant="toss" totalPrice={10000} />

          <span css={textStyle}>variant="kakao"</span>
          <PayButton variant="kakao" totalPrice={10000} />

          <h3 css={subTitleStyle}>IconButton</h3>
          <IconButton icon={<IcCopyPlus />} onClick={() => {}}>
            작성하기
          </IconButton>

          <h3 css={subTitleStyle}>SocialLoginButton</h3>
          <span css={textStyle}>platform = "kakao"</span>
          <SocialLoginButton
            platform="kakao"
            icon={<IcKakaoLogo />}
            onClick={() => console.log('카카오로 시작하기 클릭')}>
            카카오로 시작하기
          </SocialLoginButton>

          <h3 css={subTitleStyle}>SelectButton</h3>
          <span css={textStyle}>selected = "left"</span>
          <SelectButton left="left" right="right" selected="left" />

          <span css={textStyle}>selected = "right"</span>
          <SelectButton left="left" right="right" selected="right" />

          <h3 css={subTitleStyle}>CategoryButton</h3>
          <span css={textStyle}>isSelected = true</span>
          <CategoryButton icon={<IcNjob />} isSelected={true} handleClick={() => {}}>
            카테고리
          </CategoryButton>

          <span css={textStyle}>isSelected = false</span>
          <CategoryButton icon={<IcNjob />} isSelected={false} handleClick={() => {}}>
            카테고리
          </CategoryButton>

          <h3 css={subTitleStyle}>InterestCategoryButton</h3>
          <InterestCategoryButton icon={<IcHome />}>부동산</InterestCategoryButton>

          <h3 css={subTitleStyle}>ShareButton</h3>
          <ShareButton />

          <h3 css={subTitleStyle}>ClipBoardCopyButton</h3>
          <ClipboardCopyButton />
        </section>
      </div>

      <div>
        <section css={secttionContainer}>
          <h2 css={titleStyle}>input</h2>
          <h3 css={subTitleStyle}>Input</h3>
          <span css={textStyle}>isCountValue = true</span>
          <Input
            value={value}
            onChange={handleInputChange}
            placeholder="내용을 입력하세요."
            maxLength={15}
            isValid={false}
            isCountValue={true}
          />

          <span css={textStyle}>isCountValue = false</span>
          <Input
            value={value}
            onChange={handleInputChange}
            placeholder="내용을 입력하세요."
            maxLength={15}
            isValid={false}
            isCountValue={false}
          />

          <h3 css={subTitleStyle}>questionInput</h3>

          <QuestionInput
            numberLabel="Q1"
            value={value}
            onChange={handleInputChange}
            placeholder="질문을 입력하세요"
            maxLength={15}
          />
        </section>

        <section css={secttionContainer}>
          <h2 css={titleStyle}>textArea</h2>

          <TextArea
            value={value}
            maxLength={70}
            size="small"
            onChange={handleTextAreaChange}
            placeholder="답변을 입력하세요."
          />
          <span css={textStyle}>size="small"</span>

          <TextArea
            value={value}
            maxLength={200}
            size="medium"
            onChange={handleTextAreaChange}
            placeholder="답변을 입력하세요."
          />
          <span css={textStyle}>size="medium"</span>
        </section>

        <section css={secttionContainer}>
          <h2 css={titleStyle}>Select</h2>

          <h3 css={subTitleStyle}>Select</h3>
          <Select
            placeholder="사용할 플랫폼을 선택해주세요."
            options={[
              'ZOOM',
              'Google Meets',
              'Webex',
              'Microsoft Teams',
              'Skype',
              'Naver Works',
              'Zep',
            ]}></Select>

          <h3 css={subTitleStyle}>DateSelect</h3>
          <DateSelect selected={selectedDate} onChange={setSelectedDate} />

          <h3 css={subTitleStyle}>TimeSelect</h3>
          <TimeSelect />

          <h3 css={subTitleStyle}>FilterSelect</h3>
          <FilterSelect
            options={[
              'ZOOM',
              'Google Meets',
              'Webex',
              'Microsoft Teams',
              'Skype',
              'Naver Works',
              'Zep',
            ]}
          />
        </section>

        <section css={secttionContainer}>
          <h2 css={titleStyle}>image</h2>

          <h3 css={subTitleStyle}>Image</h3>
          <Image variant="square" width="1" height="1" />
          <span css={textStyle}>variant='square'</span>
          <Image variant="round" width="1" height="1" />
          <span css={textStyle}>variant='round'</span>

          <h3 css={subTitleStyle}>iamgeSelect</h3>
          <ImageSelect />
        </section>
      </div>
      <div>
        <section css={secttionContainer}>
          <h2 css={titleStyle}>Header</h2>

          <h3 css={subTitleStyle}>LogoHeader</h3>
          <LogoHeader />

          <h3 css={subTitleStyle}>Header</h3>
          <Header title="공지사항" />
        </section>

        <section css={secttionContainer}>
          <h2 css={titleStyle}>ProgressBar</h2>
          <ProgressBar progress={25} />
          <ProgressBar progress={50} />
          <ProgressBar progress={75} />
          <ProgressBar progress={100} />
        </section>

        <section css={secttionContainer}>
          <h2 css={titleStyle}>ApplicantAccordion</h2>
          <ApplicantAccordionList moimId={1} />
        </section>

        <section css={secttionContainer}>
          <h2 css={titleStyle}>SimpleUserProfile</h2>
          <SimpleUserProfile username="채연이" />
        </section>

        <section css={secttionContainer}>
          <h2 css={titleStyle}>NavigateBox</h2>
          <NavigateBox path="">공지사항</NavigateBox>
        </section>

        {/* <section css={secttionContainer}>
        <h2 css={titleStyle}>Modal</h2>
        <Modal></Modal>
      </section> */}
        <section style={{ width: '500px' }}>
          <h2 css={titleStyle}>Carousel</h2>
          <Carousel imageList={imageList} />
        </section>
      </div>
    </div>
  );
};

export default Dev;
