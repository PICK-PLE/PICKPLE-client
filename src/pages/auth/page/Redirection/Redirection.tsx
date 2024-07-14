import { usePostKakaoLogin } from '@apis/domains/user';
import { useEffect } from 'react';

const Redirection = () => {
  const code: string = new URL(window.location.href).searchParams.get('code') || '';
  window.history.forward();
  const { mutate } = usePostKakaoLogin();

  useEffect(() => {
    mutate(code);
  }, [code, mutate]);
  return <div></div>;
};

export default Redirection;
