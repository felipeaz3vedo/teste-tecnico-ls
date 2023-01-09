import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const ModalOpenButton = styled(Dialog.Trigger)`
  background-color: transparent;
`;

export const ModalOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;

  background-color: #0000001a;
`;

export const ModalContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: 28.125rem;
  max-height: 85vh;

  background-color: ${({ theme }) => theme.colors['blue-50']};

  border-radius: 0.75rem;
  box-shadow: hsl(206 22% 7% / 35%) 0rem 0.625rem 2.375rem -0.625rem,
    hsl(206 22% 7% / 20%) 0rem 0.625rem 1.25rem -0.9375rem;
  transform: translate(-50%, -50%);
  overflow: hidden;

  > p {
    margin-inline: 1.25rem;
  }

  > div {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.25rem;
    margin-top: 1.5rem;

    background-color: white;

    border-top: 1px solid ${({ theme }) => theme.colors['gray-200']};
  }
`;

export const ModalTitle = styled(Dialog.Title)`
  padding: 1rem 1.25rem;
  margin-bottom: 1rem;

  background-color: white;

  border-bottom: 1px solid ${({ theme }) => theme.colors['gray-300']};
`;

export const ModalClose = styled(Dialog.Close)`
  background-color: transparent;
`;
