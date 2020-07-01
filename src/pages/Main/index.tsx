import React, { useState, useCallback } from 'react';
import { FiBookmark, FiSearch } from 'react-icons/fi';
import Checkbox from '@material-ui/core/Checkbox';

import Input from '../../components/Input';
import SearchButton from '../../components/SearchButton';
import Button from '../../components/Button';

import {
  Header,
  HeaderContent,
  Title,
  MainContent,
  InitialBar,
  OptionSelect,
} from './styles';

const Main: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

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
      <MainContent>
        <InitialBar>
          <Input name="search" placeholder="Search for tool" icon={FiSearch} />
          <SearchButton>Search</SearchButton>

          <OptionSelect>
            <Checkbox checked={checked} onChange={handleChange} />
            <p>search in tags only</p>
          </OptionSelect>

          <Button>Adicionar</Button>
        </InitialBar>
      </MainContent>
    </>
  );
};

export default Main;
