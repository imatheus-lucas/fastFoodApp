import React from 'react';
import { ImageProps, View } from 'react-native';

import { Container,Image,Description } from './styles';
interface CategoryProps {
   path:ImageProps;
   description:string;
}
const Category: React.FC<CategoryProps> = ({ path,description}) => {
  return (
    <Container>
       <Image source={path}/>
       <Description>{description}</Description>
    </Container>
  );
}

export default Category;