import React from 'react';
import { ImageProps, View } from 'react-native';

import { Container,Image, Wrapper, WrapperText, Name, Price } from './styles';
import { Feather } from '@expo/vector-icons';

interface ProductProps {
  path:ImageProps;
}

const Product: React.FC<ProductProps> = ({path}) => {
  return (
    <Container>
      <Image source={path}/>
      <Wrapper>
        <WrapperText>
          <Name>Hamburguer</Name>
          <Price>R$29,90</Price>
        </WrapperText>
        <Feather name="plus-circle" size={27}color="#FF6584"/>
      </Wrapper>
    </Container>
  );
}

export default Product;