import React from 'react';
import { View } from 'react-native';

import { Container, Input } from './styles';
import { Feather } from '@expo/vector-icons'
const SearchBar: React.FC = () => {
  return (
    <Container>
      <Feather name="search" size={27} color="#AEAEAF"/>
      <Input placeholder="Find what you want..."/>
    </Container>
  );
}

export default SearchBar;