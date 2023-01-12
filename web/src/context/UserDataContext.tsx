import { createContext, ReactNode, useEffect, useState } from 'react';
import api from '../services/api';

type User = {
  id: string;
  name: string;
  email: string;
};

type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  updatedAt: string;
};

interface IUserDataContext {
  userData: User | undefined;
  setUserData: (user: User) => void;
  products: Product[];
  setProducts: (products: Product[]) => void;
}

interface UserContextDataProviderProps {
  children: ReactNode;
}

export const UserDataContext = createContext({} as IUserDataContext);

export function UserContextDataProvider({ children }: UserContextDataProviderProps) {
  const [userData, setUserData] = useState<User>();
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchUserData() {
    await api
      .get('/auth/login/success', {
        withCredentials: true,
      })
      .then((response) => {
        setUserData({
          id: response.data.user.id,
          name: response.data.user.name,
          email: response.data.user.email,
        });
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <UserDataContext.Provider value={{ userData, setUserData, products, setProducts }}>
      {children}
    </UserDataContext.Provider>
  );
}
