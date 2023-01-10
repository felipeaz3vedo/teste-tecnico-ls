import { Plus } from 'phosphor-react';
import { useEffect } from 'react';
import { Button } from '../../components/Button';
import { AddModal } from '../../components/Modal/AddModal';
import { Table } from '../../components/Table';
import { useUserData } from '../../hooks/useUserData';
import api from '../../services/api';
import { Heading, Text } from '../../styles/typography';
import { HomeContainer, HomeHeader } from './style';

export function Home() {
  const { setUserData } = useUserData();

  async function getData() {
    await api
      .get('/auth/login/success', {
        withCredentials: true,
      })
      .then((response) => {
        setUserData({
          name: response.data.user.displayName,
          email: response.data.user.emails[0].value,
        });
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <HomeContainer>
      <HomeHeader>
        <div>
          <Heading size="l" as="h1">
            Produtos
          </Heading>
        </div>
        <Button>
          <AddModal>
            <Text size="xs" weight="700">
              Adicionar Produto
            </Text>
          </AddModal>

          <Plus size={16} weight="bold" />
        </Button>
      </HomeHeader>

      <Table />
    </HomeContainer>
  );
}
