import { PencilSimple, TrashSimple } from 'phosphor-react';
import { Heading } from '../../styles/typography';
import { DeleteModal } from '../Modal/DeleteModal';
import { EditModal } from '../Modal/EditModal';
import { TableContainer } from './style';

export function Table() {
  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>
              <Heading size="xs" color="gray-500" weight="500">
                id
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
          <tr>
            <td>
              <Heading size="xs" weight="500" as="h3">
                1
              </Heading>
            </td>
            <td>
              <Heading size="xs" weight="500" as="h3">
                Televisão
              </Heading>
            </td>
            <td>
              <Heading size="xs" weight="500" as="h3">
                sim
              </Heading>
            </td>
            <td>
              <Heading size="xs" weight="500" as="h3">
                2530.99
              </Heading>
            </td>
            <td>
              <Heading size="xs" weight="500" as="h3">
                3405
              </Heading>
            </td>
            <td>
              <Heading size="xs" weight="500" as="h3">
                09/12/2023
              </Heading>
            </td>
            <td colSpan={2}>
              <div>
                <EditModal>
                  <PencilSimple weight="fill" size={18} />
                </EditModal>

                <DeleteModal>
                  <TrashSimple weight="fill" size={18} />
                </DeleteModal>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </TableContainer>
  );
}
