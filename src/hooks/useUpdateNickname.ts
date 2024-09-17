import { useAtom } from 'jotai';

import { userAtom } from '@stores';

type nickNameType = 'hostNickname' | 'guestNickname';

export const useUpdateNickname = () => {
  const [user, setUser] = useAtom(userAtom);

  const updateNickname = (nickname: nickNameType, updateNickname: string) => {
    nickname === 'hostNickname'
      ? setUser({ ...user, hostNickname: updateNickname })
      : setUser({ ...user, guestNickname: updateNickname });

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const updatedUser = JSON.parse(storedUser);
      updatedUser.nickname = updateNickname;
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  return { updateNickname };
};
