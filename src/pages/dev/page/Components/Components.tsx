import { useState } from 'react';
import useToast from 'src/hooks/useToast';
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
  // ApplicantAccordionList,
  TimeSelect,
  ImageSelect,
  CountPeople,
  NavigateBox,
  SimpleUserProfile,
  Toast,
  Modal,
  CategorySelectBox,
} from '@components';

import {
  IcApplicantArrcodionDown,
  IcApplicantArrcodionUp,
  IcBtnMinus,
  IcBtnPlus,
  IcCameraAdd,
  IcCheckActive,
  IcCheckDefault,
  IcClipboardCopy,
  IcCopyPlus,
  IcDefaultUserimg,
  IcDeletePhoto,
  IcDropdownDown,
  IcDropdownPlatformDown,
  IcDropdownPlatformUp,
  IcDropdownRight,
  IcDropdownUp,
  IcExclamation,
  IcHome,
  IcHouse,
  IcKakaoLogo,
  IcKakaoPay,
  IcLogo,
  IcNext,
  IcNjob,
  IcNumberLabel,
  IcPerson,
  IcShare,
  IcTossPay,
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
import { ApplicantListModal } from '@pages/host/components/index';
import { DepositModal } from '@pages/guest/components/index';

import { APPLICANT_LIST_DATA } from 'src/constants/mocks/applicantListData';
import LogoutModal from '@pages/myPage/components/LogoutModal/LogoutModal';

const applicantListData = APPLICANT_LIST_DATA;

const Components = () => {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const handleModalOpen = () => {
    setIsOpen(true);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const [people, setPeople] = useState(7);
  const handlePeopleChange = (newCount: number) => {
    setPeople(newCount);
  };
  const { showToast, isToastVisible, toastMessage } = useToast();

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
          <h2 css={titleStyle}>Icon</h2>

          <div css={iconContainerStyle}>
            <div css={iconWrapperStyle}>
              <IcApplicantArrcodionDown css={iconSvgStyle} />
              <span>IcApplicantArrcodionDown</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcApplicantArrcodionUp css={iconSvgStyle} />
              <span>IcApplicantArrcodionUp</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcBtnMinus css={iconSvgStyle} />
              <span>IcBtnMinus</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcBtnPlus css={iconSvgStyle} />
              <span>IcBtnPlus</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcCameraAdd css={iconSvgStyle} />
              <span>IcCameraAdd</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcCheckActive css={iconSvgStyle} />
              <span>IcCheckActive</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcCheckDefault css={iconSvgStyle} />
              <span>IcCheckDefault</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcClipboardCopy css={iconSvgStyle} />
              <span>IcClipboardCopy</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcCopyPlus css={iconSvgStyle} />
              <span>IcCopyPlus</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcDefaultUserimg css={iconSvgStyle} />
              <span>IcDefaultUserimg</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcDeletePhoto css={iconSvgStyle} />
              <span>IcDeletePhoto</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcDropdownDown css={iconSvgStyle} />
              <span>IcDropdownDown</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcDropdownPlatformDown css={iconSvgStyle} />
              <span>IcDropdownPlatformDown</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcDropdownPlatformUp css={iconSvgStyle} />
              <span>IcDropdownPlatformUp</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcDropdownRight css={iconSvgStyle} />
              <span>IcDropdownRight</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcDropdownPlatformUp css={iconSvgStyle} />
              <span>IcDropdownPlatformUp</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcDropdownUp css={iconSvgStyle} />
              <span>IcDropdownUp</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcExclamation css={iconSvgStyle} />
              <span>IcExclamation</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcHome css={iconSvgStyle} />
              <span>IcHome</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcHouse css={iconSvgStyle} />
              <span>IcHouse</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcKakaoLogo css={iconSvgStyle} />
              <span>IcKakaoLogo</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcKakaoPay css={iconSvgStyle} />
              <span>IcKakaoPay</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcLogo css={iconSvgStyle} />
              <span>IcLogo</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcNjob css={iconSvgStyle} />
              <span>IcNjob</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcNumberLabel css={iconSvgStyle} />
              <span>IcNumberLabel</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcPerson css={iconSvgStyle} />
              <span>IcPerson</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcNext css={iconSvgStyle} />
              <span>IcNext</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcShare css={iconSvgStyle} />
              <span>IcShare</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcTossPay css={iconSvgStyle} />
              <span>IcTossPay</span>
            </div>

            <div css={iconWrapperStyle}>
              <IcLogo css={iconSvgStyle} />
              <span>IcLogo</span>
            </div>
          </div>
        </section>

        <section css={secttionContainer}>
          <h2 css={titleStyle}>Label</h2>

          <h3 css={subTitleStyle}>numberlaber</h3>
          <NumberLabel>1</NumberLabel>

          <h3 css={subTitleStyle}>label</h3>
          <span css={textStyle}>variant='status'</span>
          <Label variant="status">입금 대기</Label>

          <span css={textStyle}>variant='dDay'</span>
          <Label variant="dDay">D - 1</Label>

          <span css={textStyle}>variant='category'</span>
          <Label variant="category" icon={<IcHouse />}>
            부동산
          </Label>

          <span css={textStyle}>variant='count'</span>
          <Label variant="count">03 / 10</Label>

          <span css={textStyle}>variant='countBlack'</span>
          <Label variant="countBlack">03 / 10</Label>

          <span css={textStyle}>variant='textCount'</span>
          <Label variant="textCount">승인 현황 12 / 15</Label>
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
          <button onClick={() => showToast('신청 마감일 이후에 신청자를 승인할 수 있어요.')}>
            토스트 나타나라!
          </button>
          <Toast toastIcon={true} isVisible={isToastVisible} toastBottom={3}>
            {toastMessage}
          </Toast>
        </section>
      </div>

      <div>
        <section css={secttionContainer}>
          <h2 css={titleStyle}>Button</h2>

          <h3 css={subTitleStyle}>Button</h3>

          <span css={textStyle}>variant = round</span>
          <Button variant="round">버튼</Button>

          <span css={textStyle}>variant = stroke</span>
          <Button variant="stroke">버튼</Button>

          <span css={textStyle}>variant = xSmall</span>
          <Button variant="xSmall">버튼</Button>

          <span css={textStyle}>variant = small</span>
          <Button variant="small">버튼</Button>

          <span css={textStyle}>variant = medium</span>
          <Button variant="medium">버튼</Button>

          <span css={textStyle}>variant = large</span>
          <Button variant="large">버튼</Button>

          <span css={textStyle}>variant = large(disabled)</span>
          <Button variant="large" disabled={true}>
            버튼
          </Button>

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
          <h2 css={titleStyle}>Input</h2>
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

          <h3 css={subTitleStyle}>QuestionInput</h3>

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

          {/* <TextArea
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
          /> */}
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
          {/* <FilterSelect
            options={['전체', '입금 대기', '승인 대기', '승인 완료', '승인 거절', '환불 완료']}
          /> */}
        </section>

        <section css={secttionContainer}>
          <h2 css={titleStyle}>Image</h2>

          <h3 css={subTitleStyle}>Image</h3>
          <span css={textStyle}>with label</span>
          <Image
            src="https://placehold.co/150"
            variant="square"
            width="15rem"
            label={<Label variant="status">입금 대기</Label>}
          />
          <span css={textStyle}>variant='square'</span>
          <Image src="https://placehold.co/50" variant="square" width="50px" height="50px" />
          <span css={textStyle}>variant='round'</span>
          <Image src="https://placehold.co/50" variant="round" width="50px" />

          <h3 css={subTitleStyle}>IamgeSelect</h3>
          {/* <ImageSelect /> */}
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
          {/* <ApplicantAccordionList moimId={1} /> */}
        </section>

        <section css={secttionContainer}>
          <h2 css={titleStyle}>SimpleUserProfile</h2>
          <SimpleUserProfile size="large" username="신청자" />
          <SimpleUserProfile size="medium" username="달아오르구마" />
          <SimpleUserProfile size="small" username="달아아오르구마마마마" />
        </section>

        <section css={secttionContainer}>
          <h2 css={titleStyle}>NavigateBox</h2>
          <NavigateBox path="">공지사항</NavigateBox>
        </section>

        {/* <section css={secttionContainer}>
        <h2 css={titleStyle}>Modal</h2>
        <Modal></Modal>
      </section> */}
        <section style={{ width: '400px' }}>
          <h2 css={titleStyle}>Carousel</h2>
          <Carousel imageList={imageList} />
        </section>
        {/* <section css={secttionContainer}>
          <h2 css={titleStyle}>ApplicantListModal</h2>
          <button onClick={handleModalOpen}>모달 열기</button>
          {isOpen && (
            <Modal onClose={handleModalClose}>
              <ApplicantListModal
                applicantListData={applicantListData}
                onClose={handleModalClose}
              />
            </Modal>
          )}
        </section>
        <section css={secttionContainer}>
          <h2 css={titleStyle}>DepositModal</h2>
          <button onClick={handleModalOpen}>모달 열기</button>
          {isOpen && (
            <Modal onClose={handleModalClose}>
              <DepositModal onClose={handleModalClose} />
            </Modal>
          )}
        </section> */}
        <section css={secttionContainer}>
          <h2 css={titleStyle}>LogoutModal</h2>
          <button onClick={handleModalOpen}>모달 열기</button>
          {isOpen && (
            <Modal onClose={handleModalClose}>
              <LogoutModal onClose={handleModalClose} />
            </Modal>
          )}
        </section>
        {/* <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CategorySelectBox />
        </section> */}
      </div>
    </div>
  );
};

export default Components;
