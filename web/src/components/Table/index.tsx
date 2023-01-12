import { PencilSimple, TrashSimple } from 'phosphor-react';
import { useUserData } from '../../hooks/useUserData';
import api from '../../services/api';
import { Heading } from '../../styles/typography';
import { formatDate } from '../../utils/formatDate';
import { EditModal } from '../Modal/EditModal';
import { TableContainer } from './style';

export function Table() {
  const { products, setProducts } = useUserData();

  const handleDelete = async (id: string) => {
    await api
      .delete(`/product/${id}`, {
        withCredentials: true,
      })
      .then(() => {
        const newArray = products.filter((product) => product.id !== id);

        setProducts(newArray);
      })
      .catch((error) => console.log(error));
  };

  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>
              <Heading size="xs" color="gray-500" weight="500">
                id do produto
              </Heading>
            </th>
            <th>
              <Heading size="xs" color="gray-500" weight="500">
                nome
              </Heading>
            </th>
            <th>
              <Heading size="xs" color="gray-500" weight="500">
                estoque
              </Heading>
            </th>
            <th>
              <Heading size="xs" color="gray-500" weight="500">
                preço
              </Heading>
            </th>
            <th>
              <Heading size="xs" color="gray-500" weight="500">
                quantidade
              </Heading>
            </th>
            <th>
              <Heading size="xs" color="gray-500" weight="500">
                última atualização
              </Heading>
            </th>
            <th colSpan={2}>
              <Heading size="xs" color="gray-500" weight="500">
                ações
              </Heading>
            </th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <Heading size="xs" weight="500" as="h3">
                  {product.id}
                </Heading>
              </td>
              <td>
                <Heading size="xs" weight="500" as="h3">
                  {product.name}
                </Heading>
              </td>
              <td>
                <Heading size="xs" weight="500" as="h3">
                  {product.quantity > 0 ? 'sim' : 'não'}
                </Heading>
              </td>
              <td>
                <Heading size="xs" weight="500" as="h3">
                  {product.price}
                </Heading>
              </td>
              <td>
                <Heading size="xs" weight="500" as="h3">
                  {product.quantity}
                </Heading>
              </td>
              <td>
                <Heading size="xs" weight="500" as="h3">
                  {formatDate(product.updatedAt)}
                </Heading>
              </td>
              <td colSpan={2}>
                <div>
                  <EditModal productId={product.id}>
                    <PencilSimple weight="fill" size={18} />
                  </EditModal>

                  <TrashSimple weight="fill" size={18} onClick={() => handleDelete(product.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}
