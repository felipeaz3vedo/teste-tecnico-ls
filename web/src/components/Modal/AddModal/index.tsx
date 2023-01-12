import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode, useState } from 'react';
import { Heading, Text } from '../../../styles/typography';
import {
  ModalOverlay,
  ModalContent,
  ModalOpenButton,
  ModalHeader,
  NumericFieldsContainer,
  NumericField,
  ModalClose,
  SubmitArea,
  ErrorMessage,
  InputArea,
  TextInput,
} from './style';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { X } from 'phosphor-react';
import { Button } from '../../Button';
import api from '../../../services/api';
import { useUserData } from '../../../hooks/useUserData';

interface AddModalProps {
  children?: ReactNode;
}

const addFormSchema = zod.object({
  name: zod.string().min(1, 'Campo obrigatório'),
  price: zod.string().min(1, 'Campo obrigatório'),
  quantity: zod.string().min(1, 'Campo obrigatório'),
});

export type AddFormValues = zod.infer<typeof addFormSchema>;

export function AddModal({ children }: AddModalProps) {
  const { userData, products, setProducts } = useUserData();
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddFormValues>({
    resolver: zodResolver(addFormSchema),
  });

  const onFormSubmit = async (data: AddFormValues) => {
    const formatedData = {
      name: data.name,
      price: Number(data.price),
      quantity: Number(data.quantity),
    };

    await api
      .post(`/product/user/${userData?.id}`, formatedData, {
        withCredentials: true,
      })
      .then(({ data }) => {
        const newProduct = {
          id: data.id,
          name: data.name,
          price: data.price,
          quantity: data.quantity,
          updatedAt: data.updatedAt,
        };

        setProducts([...products, newProduct]);
      })
      .catch((error) => console.log(error));

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
              Adicionar novo produto
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
                  id="name"
                  type="text"
                  placeholder="Insira o nome do produto"
                  {...register('name')}
                />
                <ErrorMessage>{errors.name?.message}</ErrorMessage>
              </TextInput>

              <NumericFieldsContainer>
                <NumericField>
                  <label htmlFor="price">Preço</label>
                  <input
                    id="price"
                    type="number"
                    placeholder="Insira o preço"
                    {...register('price')}
                  />
                  <ErrorMessage>{errors.price?.message}</ErrorMessage>
                </NumericField>

                <NumericField>
                  <label htmlFor="quantity">Quantidade</label>
                  <input
                    id="quantity"
                    type="number"
                    placeholder="Insira a quantidade"
                    {...register('quantity')}
                  />
                  <ErrorMessage>{errors.quantity?.message}</ErrorMessage>
                </NumericField>
              </NumericFieldsContainer>
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
