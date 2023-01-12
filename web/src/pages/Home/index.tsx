import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserData } from '../../hooks/useUserData';
import { Heading } from '../../styles/typography';
import { HomeContainer } from './style';

export function Home() {
  const { userData } = useUserData();

  const navigate = useNavigate();

  useEffect(() => {
    userData && navigate('/plataform');
  }, [userData]);

  return (
    <HomeContainer>
      <Heading>HomePage</Heading>
    </HomeContainer>
  );
}
