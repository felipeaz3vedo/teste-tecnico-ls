import { HeaderContainer, UserInfo, UserImage, HeaderWrap } from './style';
import { useUserData } from '../../hooks/useUserData';
import { Button } from '../Button';
import { Text } from '../../styles/typography';
import { GoogleLogo, SignOut } from 'phosphor-react';

export function Header() {
  const { userData } = useUserData();

  async function handleLogin() {
    window.open('http://localhost:3333/auth/google/login', '_self');
  }

  function handleLogout() {
    window.open('http://localhost:3333/auth/logout', '_self');
  }

  return (
    <HeaderContainer>
      <HeaderWrap isLoged={!!userData}>
        {userData && (
          <UserInfo>
            <UserImage>
              <p>{userData.name[0]}</p>
            </UserImage>

            <div>
              <Text>Bem vindo, {`${userData.name}`}.</Text>

              <Text size="xs" lineHeight="110" color="gray-500">
                {`${userData.email}`}
              </Text>
            </div>
          </UserInfo>
        )}

        {userData ? (
          <Button variant="outline" handleLogout={handleLogout}>
            <SignOut size={16} weight="bold" />
            <Text size="xs" weight="700">
              Logout
            </Text>
          </Button>
        ) : (
          <Button variant="outline" handleLogout={handleLogin}>
            <GoogleLogo size={16} weight="bold" />
            <Text size="xs" weight="700">
              Login
            </Text>
          </Button>
        )}
      </HeaderWrap>
    </HeaderContainer>
  );
}
