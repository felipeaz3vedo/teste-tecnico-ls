import { Plus } from 'phosphor-react';
import { Button } from '../../components/Button';
import { AddModal } from '../../components/Modal/AddModal';
import { Table } from '../../components/Table';
import { Heading, Text } from '../../styles/typography';
import { HomeContainer, HomeHeader, ProductsCount } from './style';

export function Home() {
  return (
    <HomeContainer>
      <HomeHeader>
        <div>
          <Heading size="l" as="h1">
            Produtos
          </Heading>
          {/* <ProductsCount>
            <Text weight="700" color="purple-600">
              4
            </Text>
          </ProductsCount> */}
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
