import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import { Heading, Text } from '../../../styles/typography';
import { Button } from '../../Button';
import {
  ModalOverlay,
  ModalContent,
  ModalOpenButton,
  ModalTitle,
  AddForm,
  NumericFieldsContainer,
  NumericField,
  ModalClose,
} from './style';

interface AddModalProps {
  children?: ReactNode;
}

export function AddModal({ children }: AddModalProps) {
  return (
    <Dialog.Root>
      <ModalOpenButton>{children}</ModalOpenButton>

      <Dialog.Portal>
        <ModalOverlay />

        <ModalContent>
          <ModalTitle>
            <Heading size="l" weight="700">
              Adicionar novo produto
            </Heading>
          </ModalTitle>

          <AddForm action="submit">
            <label htmlFor="name">
              Nome <span>*</span>
            </label>
            <input name="name" type="text" placeholder="Insira o nome do produto" />

            <NumericFieldsContainer>
              <NumericField>
                <label htmlFor="name">
                  Preço <span>*</span>
                </label>
                <input name="name" type="number" placeholder="Insira o preço" />
              </NumericField>

              <NumericField>
                <label htmlFor="name">
                  Quantidade <span>*</span>
                </label>
                <input name="name" type="number" placeholder="Insira a quantidade" />
              </NumericField>
            </NumericFieldsContainer>
          </AddForm>

          <div>
            <ModalClose>
              <Button variant="outline" color="gray-700">
                <Text size="xs" weight="700">
                  Cancelar
                </Text>
              </Button>
            </ModalClose>

            <Button>
              <Text size="xs" weight="700">
                Adicionar
              </Text>
            </Button>
          </div>
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
