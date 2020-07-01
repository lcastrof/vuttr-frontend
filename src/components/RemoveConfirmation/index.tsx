import React, { useCallback } from 'react';

import { FiX } from 'react-icons/fi';

import Modal from '../Modal';
import Button from '../Button';

import { Content } from './styles';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleRemove: () => void;
}

const RemoveConfirmation: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  handleRemove,
}) => {
  const handleConfirmation = useCallback(async () => {
    handleRemove();

    setIsOpen();
  }, [handleRemove, setIsOpen]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Content>
        <header>
          <FiX size={24} />
          <h1>Remove Tool</h1>
        </header>

        <p>
          Are you sure you want to remove <strong>Notion</strong>?
        </p>

        <div id="buttons">
          <Button type="button" background="#ee424d" onClick={setIsOpen}>
            Cancel
          </Button>
          <Button
            type="submit"
            background="#12db89"
            onClick={handleConfirmation}
          >
            Remove Tool
          </Button>
        </div>
      </Content>
    </Modal>
  );
};

export default RemoveConfirmation;
