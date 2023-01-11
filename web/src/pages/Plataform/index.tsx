import { Plus } from 'phosphor-react';
import { Button } from '../../components/Button';
import { AddModal } from '../../components/Modal/AddModal';
import { Table } from '../../components/Table';
import { Heading, Text } from '../../styles/typography';
import { PlataformContainer, PlataformHeader } from './style';

export function Plataform() {
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
