import { GoogleLogo, SignOut } from 'phosphor-react';
import { useState } from 'react';
import { Text } from '../../styles/typography';
import { Button } from '../Button';
import { HeaderContainer, UserInfo, UserImage, HeaderWrap } from './style';

export function Header() {
  const [user] = useState(true);

  if (user) {
    return (
      <HeaderContainer>
        <HeaderWrap isLoged={user}>
          <UserInfo>
            <UserImage>
              <img src="" alt="" />
            </UserImage>

            <div>
              <Text>Bem vindo, Felipe Azevedo.</Text>

              <Text size="xs" lineHeight="110" color="gray-500">
                felipedeazevedopessoa@gmail.com
              </Text>
            </div>
          </UserInfo>

          <Button variant="outline">
            <SignOut size={16} weight="bold" />
            <Text size="xs" weight="700">
              Logout
            </Text>
          </Button>
        </HeaderWrap>
      </HeaderContainer>
    );
  }

  return (
    <HeaderContainer>
      <HeaderWrap isLoged={user}>
        <Button variant="outline">
          <GoogleLogo size={16} weight="bold" />
          <Text size="xs" weight="700">
            Login
          </Text>
        </Button>
      </HeaderWrap>
    </HeaderContainer>
  );
}
