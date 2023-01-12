import { Plus } from 'phosphor-react';
import { useEffect } from 'react';
import { Button } from '../../components/Button';
import { AddModal } from '../../components/Modal/AddModal';
import { Table } from '../../components/Table';
import { useUserData } from '../../hooks/useUserData';
import api from '../../services/api';
import { Heading, Text } from '../../styles/typography';
import { PlataformContainer, PlataformHeader } from './style';

export function Plataform() {
  const { setProducts } = useUserData();

  const fetchProductsData = async () => {
    await api
      .get('http://localhost:3333/products', {
        withCredentials: true,
      })
      .then((response) => {
        setProducts(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <PlataformContainer>
      <PlataformHeader>
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
      </PlataformHeader>

      <Table />
    </PlataformContainer>
  );
}
