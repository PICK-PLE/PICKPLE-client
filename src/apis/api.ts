import axios from 'axios';

import { components } from '@schema';
import { ApiResponseType } from '@types';

type AccessTokenGetSuccess = components['schemas']['AccessTokenGetSuccess'];

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  // withCredentials: true,

  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

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

const fetchAccessToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');

  try {
    const response = await get<ApiResponseType<AccessTokenGetSuccess>>(
      `/v1/user/token-refresh?refreshToken=${refreshToken}`
    );

    const accessToken = response.data.data.accessToken;
    if (!accessToken) {
      return null;
    }
    localStorage.setItem('accessToken', accessToken);
    instance.defaults.headers.Authorization = `Bearer ${accessToken}`;
    return accessToken;
  } catch (error) {
    console.error('토큰 재발급 실패:', error);
    throw new Error('토큰 재발급에 실패했습니다.');
  }
};

instance.interceptors.response.use(
  (response) => response, // 성공적인 응답은 그대로 반환
  async (error) => {
    const errorData = error?.response;
    const accessToken = localStorage.getItem('accessToken');

    // 에러 데이터와 기존 accessToken이 있는지 확인
    if (errorData && errorData.status === 401 && accessToken) {
      const originalRequest = error.config;

      try {
        // 새로운 accessToken 발급 시도
        const newAccessToken = await fetchAccessToken();

        // 새로운 accessToken으로 헤더 업데이트
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        // 요청 재시도
        return axios.request(originalRequest);
      } catch (tokenError) {
        console.error('토큰 갱신 후 재시도 실패:', tokenError);
        return Promise.reject(tokenError);
      }
    }

    console.error('응답 에러:', error);
    return Promise.reject(error);
  }
);
