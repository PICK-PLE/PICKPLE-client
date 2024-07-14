import { usePostKakaoLogin } from '@apis/domains/user';
import { userAtom } from '@stores';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

const Redirection = () => {
  const code: string = new URL(window.location.href).searchParams.get('code') || '';
  window.history.forward();
  const { mutate, data } = usePostKakaoLogin();
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    mutate(code);
  }, [code, mutate]);

  useEffect(() => {
    if (data) {
      console.log('data', data);
    }
    
  }, [data]);
  return <div></div>;
};

export default Redirection;
