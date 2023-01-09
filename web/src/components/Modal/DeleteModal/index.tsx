import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import { Heading, Text } from '../../../styles/typography';
import { Button } from '../../Button';
import { ModalOverlay, ModalContent, ModalOpenButton, ModalTitle, ModalClose } from './style';

interface DeleteModalProps {
  children?: ReactNode;
}

export function DeleteModal({ children }: DeleteModalProps) {
  return (
    <Dialog.Root>
      <ModalOpenButton>{children}</ModalOpenButton>

      <Dialog.Portal>
        <ModalOverlay />

        <ModalContent>
          <ModalTitle>
            <Heading size="l" weight="700">
              Deletar produto
            </Heading>
          </ModalTitle>

          <Text weight="400">Tem certeza que quer deletar este produto do banco de dados?</Text>

          <div>
            <ModalClose>
              <Button variant="outline" color="gray-700">
                <Text size="xs" weight="700">
                  Cancelar
                </Text>
              </Button>
            </ModalClose>

            <Button color="red-800">
              <Text size="xs" weight="700">
                Deletar
              </Text>
            </Button>
          </div>
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
