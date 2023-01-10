import { createContext, ReactNode, useEffect, useState } from 'react';
import api from '../services/api';

type User = {
  name: string;
  email: string;
};

interface IUserDataContext {
  userData: User | undefined;
  setUserData: (user: User) => void;
}

interface UserContextDataProviderProps {
  children: ReactNode;
}

export const UserDataContext = createContext({} as IUserDataContext);

export function UserContextDataProvider({ children }: UserContextDataProviderProps) {
  const [userData, setUserData] = useState<User>();

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
}
