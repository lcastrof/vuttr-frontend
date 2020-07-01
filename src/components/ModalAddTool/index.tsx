import React, { useCallback } from 'react';

import { FiPlus } from 'react-icons/fi';

import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';

import { Form, Section } from './styles';

interface CreateToolData {
  title: string;
  link: string;
  description: string;
  tags: string[];
}

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddTool: (tool: CreateToolData) => void;
}

const ModalAddTool: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddTool,
}) => {
  const handleSubmit = useCallback(
    async (data: CreateToolData) => {
      handleAddTool(data);

      setIsOpen();
    },
    [handleAddTool, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <header>
          <FiPlus size={24} />
          <h1>Add a new tool</h1>
        </header>

        <Section>
          <h2>Tool Name</h2>
          <Input name="name" />
        </Section>

        <Section>
          <h2>Tool Link</h2>
          <Input name="link" />
        </Section>

        <Section>
          <h2>Tool Description</h2>
          <Input isTextArea name="description" />
        </Section>

        <Section>
          <h2>Tags</h2>
          <Input name="tags" />
        </Section>

        <div id="buttons">
          <Button type="button" background="#ee424d" onClick={setIsOpen}>
            Cancel
          </Button>
          <Button type="submit" background="#12db89">
            Add Tool
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalAddTool;
