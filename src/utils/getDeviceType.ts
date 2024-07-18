declare global {
    interface Window {
      opera?: unknown;
      MSStream?: unknown;
    }
  }

  export const getDeviceType = (): string => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    if (typeof userAgent === 'string') {
      if (/android/i.test(userAgent)) {
        return 'Android';
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 'iOS';
      }
    }
  
    return 'Desktop';
  };

// 이런 식으로 사용할 것
//   const handleButtonClick = () => {
//     const deviceType = getDeviceType();
//     if (deviceType === 'Android') {
//       console.log('안드로이드 기기에서 버튼 클릭');
//     } else if (deviceType === 'iOS') {
//       console.log('아이폰에서 버튼 클릭');
//     } else {
//       console.log('데스크탑에서 버튼 클릭');
//     }
//   };
