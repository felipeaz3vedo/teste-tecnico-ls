import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode, useState } from 'react';
import { Heading, Text } from '../../../styles/typography';
import {
  ModalOverlay,
  ModalContent,
  ModalOpenButton,
  ModalHeader,
  ModalClose,
  SubmitArea,
  ErrorMessage,
  InputArea,
  NumericInputsContainer,
  NumericInput,
  TextInput,
} from './style';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { X } from 'phosphor-react';
import { Button } from '../../Button';
import api from '../../../services/api';
import { useUserData } from '../../../hooks/useUserData';

interface EditModalProps {
  children?: ReactNode;
  productId: string;
}

const editFormSchema = zod.object({
  name: zod.string().min(1, 'Campo obrigatório'),
  price: zod.string().min(1, 'Campo obrigatório'),
  quantity: zod.string().min(1, 'Campo obrigatório'),
});

export type EditFormValues = zod.infer<typeof editFormSchema>;

export function EditModal({ children, productId }: EditModalProps) {
  const { products, setProducts } = useUserData();
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditFormValues>({
    resolver: zodResolver(editFormSchema),
  });

  const onFormSubmit = async (data: EditFormValues) => {
    const formatedData = {
      name: data.name,
      price: Number(data.price),
      quantity: Number(data.quantity),
    };

    await api
      .put(`/product/${productId}`, formatedData, {
        withCredentials: true,
      })
      .then(({ data }) => {
        const newArray = products.map((curr) => (curr.id === data.id ? data : curr));

        setProducts(newArray);
      })
      .catch((error) => {
        console.log(error);
      });

    reset();

    setIsOpen(false);
  };

  return (
    <Dialog.Root>
      <ModalOpenButton onClick={() => setIsOpen(true)}>{children}</ModalOpenButton>

      <Dialog.Portal>
        <ModalOverlay isOpen={isOpen} onClick={() => setIsOpen(false)} />

        <ModalContent isOpen={isOpen}>
          <ModalHeader>
            <Heading size="l" weight="700">
              Editar produto
            </Heading>

            <ModalClose onClick={() => setIsOpen(false)} asChild>
              <X weight="bold" size={16} width={32} />
            </ModalClose>
          </ModalHeader>

          <form onSubmit={handleSubmit(onFormSubmit)}>
            <InputArea>
              <TextInput>
                <label htmlFor="name">Nome</label>
                <input
                  id="name "
                  type="text"
                  placeholder="Insira o nome do produto"
                  {...register('name')}
                />
                <ErrorMessage>{errors.name?.message}</ErrorMessage>
              </TextInput>

              <NumericInputsContainer>
                <NumericInput>
                  <label htmlFor="price">Preço</label>
                  <input
                    id="price"
                    type="number"
                    placeholder="Insira o preço"
                    {...register('price')}
                  />
                  <ErrorMessage>{errors.price?.message}</ErrorMessage>
                </NumericInput>

                <NumericInput>
                  <label htmlFor="quantity">Quantidade</label>
                  <input
                    id="quantity"
                    type="number"
                    placeholder="Insira a quantidade"
                    {...register('quantity')}
                  />
                  <ErrorMessage>{errors.quantity?.message}</ErrorMessage>
                </NumericInput>
              </NumericInputsContainer>
            </InputArea>

            <SubmitArea>
              <Button type={'submit'}>
                <Text size="xs" weight="700">
                  Confirmar
                </Text>
              </Button>
            </SubmitArea>
          </form>
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
