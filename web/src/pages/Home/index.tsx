import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserData } from '../../hooks/useUserData';
import api from '../../services/api';
import { Heading } from '../../styles/typography';

export function Home() {
  const { userData, setUserData } = useUserData();

  const navigate = useNavigate();

  async function getData() {
    await api
      .get('/auth/login/success', {
        withCredentials: true,
      })
      .then((response) => {
        setUserData({
          name: response.data.user.name,
          email: response.data.user.email,
        });
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getData();
  }, []);

  userData && navigate('/plataform');

  return (
    <>
      <Heading>HomePage</Heading>
    </>
  );
}
