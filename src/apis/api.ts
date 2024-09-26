import axios, { AxiosError } from 'axios';

import { clearLocalStorage } from '@utils';

import { components } from '@schema';
import { ApiResponseType, ErrorType } from '@types';

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

const fetchAccessToken = async (): Promise<string | null> => {
  const refreshToken = localStorage.getItem('refreshToken');

  try {
    const response = await axios.get<ApiResponseType<AccessTokenGetSuccess>>(
      `${import.meta.env.VITE_APP_BASE_URL}/v1/user/token-refresh?refreshToken=${refreshToken}`
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

    const errorData = (error as AxiosError)?.response?.data as ErrorType;

    // 리프레시 토큰 만료 시. 로그아웃 처리
    if (errorData.status === 40101) {
      console.error('리프레시 토큰 만료:', errorData);
      clearLocalStorage();
      window.location.href = '/login';
      return Promise.reject(error);
    }
    return null;
  }
};

instance.interceptors.response.use(
  (response) => response, // 성공적인 응답은 그대로 반환
  async (error) => {
    const errorData = error?.response.data;
    const accessToken = localStorage.getItem('accessToken');

    if (errorData && errorData.status && accessToken) {
      // 액세스 토큰 만료 시. 리프레시 토큰으로 재발급 시도
      if (errorData.status === 40100) {
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
    }

    console.error('응답 에러:', error);
    return Promise.reject(error);
  }
);
