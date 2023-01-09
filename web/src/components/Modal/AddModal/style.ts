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

export const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-inline: 1rem;

  label {
    margin-bottom: 0.625rem;

    font-size: 0.875rem;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 1%;
    color: ${({ theme }) => theme.colors['gray-700']};

    > span {
      color: ${({ theme }) => theme.colors['red-800']};
    }
  }

  input {
    border: none;
    padding: 0.375rem 0.5rem;
    margin-bottom: 1rem;

    font-size: 0.875rem;
    line-height: 150%;
    letter-spacing: 1%;

    border-radius: 6px;
    box-shadow: ${({ theme }) => theme.shadows.input};

    &::placeholder {
      font-size: 0.875rem;
      line-height: 150%;
      letter-spacing: 1%;
      color: ${({ theme }) => theme.colors['gray-600']};
    }

    &:focus {
      border: 2px solid ${({ theme }) => theme.colors['gray-600']};
    }
  }
`;

export const NumericFieldsContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const NumericField = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 9.375rem;
`;
