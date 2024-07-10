import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  // withCredentials: true,

  /**@notice서로 다른 도메인(크로스 도메인)에 요청을 보낼 때 요청에`credential`정보를 담아서 보낼 지를 결정하는 항목임.

1. 쿠키를 첨부해서 보내는 요청
2. 헤더에 `Authorization`항목이 있는 요청

따라서, 보내고자 하는 요청이 위 두 가지 항목 중 한 가지라도 포함하고 있다면`withCredentials`옵션을`true`로 설정해야함
     * 
    */

  headers: {
    Authorization: `Bearer 엑세스 토큰`,
  },
});

//모임 Id를 계속 쏠 필요가 있는가? 명세서 보니깐 path로 받는 것 같은데...
//일단 주석 처리 해놓겠습니다
// instance.interceptors.request.use(
//     (config) => {
//       const memberId = 1;
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
