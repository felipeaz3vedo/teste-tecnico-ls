import { useContext } from 'react';
import { UserDataContext } from '../context/UserDataContext';

export const useUserData = () => {
  const userData = useContext(UserDataContext);
  return userData;
};
