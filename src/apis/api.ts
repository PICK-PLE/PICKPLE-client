import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  // withCredentials: true,

  // headers: {
  //   // Authorization: `Bearer 엑세스 토큰`,
  // },
});

//모임 Id를 계속 쏠 필요가 있는가? 명세서 보니깐 path로 받는 것 같은데...
//일단 주석 처리 해놓겠습니다
// instance.interceptors.request.use(
//     (config) => {
//       const memberId = 1; //예시 멤버 ID
//       config.headers['memberId'] = memberId;
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     },
//   );

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T>(...args);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T>(...args);
}

export function put<T>(...args: Parameters<typeof instance.put>) {
  return instance.put<T>(...args);
}

export function patch<T>(...args: Parameters<typeof instance.patch>) {
  return instance.patch<T>(...args);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T>(...args);
}
