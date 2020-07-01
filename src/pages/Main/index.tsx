import React, { useState, useCallback, useEffect } from 'react';
import { FiBookmark, FiSearch, FiPlus, FiX } from 'react-icons/fi';
import Checkbox from '@material-ui/core/Checkbox';
import { Form } from '@unform/web';

import ModalAddTool from '../../components/ModalAddTool';
import RemoveConfirmation from '../../components/RemoveConfirmation';

import Input from '../../components/Input';
import SearchButton from '../../components/SearchButton';
import Button from '../../components/Button';

import {
  Header,
  HeaderContent,
  Title,
  MainContent,
  InitialBar,
  Card,
  Delete,
  Tags,
} from './styles';

import api from '../../services/api';

interface ToolData {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

const Main: React.FC = () => {
  const [tools, setTools] = useState<ToolData[]>([]);
  const [selectedTool, setSelectedTool] = useState<number>(0);
  const [checked, setChecked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [removeOpen, setRemoveOpen] = useState(false);

  useEffect(() => {
    async function loadTools(): Promise<void> {
      const { data } = await api.get('/tools');

      setTools(data);
    }

    loadTools();
  }, []);

  const handleSubmit = useCallback((data: object): void => {
    console.log(data);
  }, []);

  const handleChange = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  const toggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  const toggleRemoveConfirmation = useCallback(() => {
    setRemoveOpen(!removeOpen);
  }, [removeOpen]);

  const handleAddTool = useCallback(() => {
    console.log('ok');
  }, []);

  const handleRemoveTool = useCallback((id: number) => {
    console.log('ok');
  }, []);

  return (
    <>
      <Header>
        <HeaderContent>
          <Title>
            <h1>VUTTR</h1>
            <FiBookmark size={40} color="#545454" opacity="80%" />
          </Title>
          <span>Very Usefull Tools to Remember</span>
        </HeaderContent>
      </Header>

      <ModalAddTool
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddTool={handleAddTool}
      />
      <RemoveConfirmation
        isOpen={removeOpen}
        setIsOpen={toggleRemoveConfirmation}
        handleRemove={handleRemoveTool}
        selectedTool={selectedTool}
      />

      <MainContent>
        <InitialBar>
          <div id="search">
            <Form onSubmit={handleSubmit}>
              <Input
                name="search"
                placeholder="Search for tool"
                icon={FiSearch}
              />
              <SearchButton>Search</SearchButton>
            </Form>

            <Checkbox checked={checked} onChange={handleChange} />
            <p>search in tags only</p>
          </div>

          <Button icon={FiPlus} background="#12db89" onClick={toggleModal}>
            Add
          </Button>
        </InitialBar>

        {tools &&
          tools.map((tool) => (
            <Card key={tool.id}>
              <div id="card-header">
                <a href={tool.link} id="title" target="_blank" rel="noreferrer">
                  {tool.title}
                </a>
                <Delete
                  onClick={() => {
                    setSelectedTool(tool.id);
                    toggleRemoveConfirmation();
                  }}
                >
                  <FiX />
                </Delete>
              </div>
              <p>{tool.description}</p>
              <Tags>{tool.tags.map((tag) => `#${tag}  `)}</Tags>
            </Card>
          ))}
      </MainContent>
    </>
  );
};

export default Main;
