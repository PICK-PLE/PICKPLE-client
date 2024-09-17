import { useAtom } from 'jotai';

import { userAtom } from '@stores';

type nickNameType = 'hostNickname' | 'guestNickname';

export const useUpdateNickname = () => {
  const [user, setUser] = useAtom(userAtom);

  const updateNickname = (nickname: nickNameType, updateNickname: string) => {
    setUser({ ...user, [nickname]: updateNickname });

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const updatedUser = JSON.parse(storedUser);
      updatedUser.nickname = updateNickname;
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  return { updateNickname };
};
