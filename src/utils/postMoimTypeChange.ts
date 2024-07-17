import { ClassPostDataType } from "src/stores/types/classPostDataType";

export const transformClassPostState = (state: ClassPostDataType) => {
    return {
      categoryList: state.categoryList,
      isOffline: state.isOffline,
      spot: state.isOffline ? state.offlineSpot : state.onlineSpot,
      dateList: {
        date: state.date,
        dayOfWeek: state.dayOfWeek,
        startTime: state.startTime,
        endTime: state.endTime,
      },
      maxGuest: state.maxGuest,
      fee: state.fee,
      accountList: state.accountList,
      questionList: state.questionList,
      title: state.title,
      description: state.description,
      imageList: {
        imageUrl1: state.imageList[0] || '',
        imageUrl2: state.imageList[1] || '',
        imageUrl3: state.imageList[2] || '',
      },
    };
  };
  