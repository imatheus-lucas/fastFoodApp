import React from "react";
import { View, Text, ScrollView } from "react-native";
import {
  Container,
  WelcomeText,
  WrapperTitle,
  Advertising,
  AdvertingText,
  AdvertingSubText,
  AdvertisingWrapper,
  AdvertisingImage,
  Wrappper,
} from "./styles";

import SearchBar from "../../components/SearchBar";
import Category from "../../components/Category";
import Product from "../../components/Product";

import Hamburguer from "../../assets/images/hamburguer.png";
import barbecue from "../../assets/images/barbecue.png";
import snack from "../../assets/images/snack.png";
import drink from "../../assets/images/drink.png";
import pizza from "../../assets/images/pizza.png";

const Home: React.FC = () => {
  return (
    <Container>
      <WrapperTitle>
        <WelcomeText>Hi</WelcomeText>
        <WelcomeText isBold>Matheus</WelcomeText>
      </WrapperTitle>
      <SearchBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        
      >
        <Advertising>
          <AdvertisingWrapper>
            <AdvertingText isBold>Offer of the day</AdvertingText>
            <AdvertingSubText>for new users</AdvertingSubText>
          </AdvertisingWrapper>
          <AdvertisingImage
            source={Hamburguer}
            style={{ width: 130 }}
            resizeMode="contain"
          />
        </Advertising>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: 5 }}
          horizontal
        >
          <Category description="Hamburguer" path={snack} />
          <Category description="Bebidas" path={drink} />
          <Category description="Pizzas" path={pizza} />
          <Category description="Churrascos" path={barbecue} />
        </ScrollView>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: 5 }}
          horizontal
        >
          <Product path={Hamburguer} />
          <Product path={Hamburguer} />
          <Product path={Hamburguer} />
        </ScrollView>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: 5 }}
          horizontal
        >
          <Product path={Hamburguer} />
          <Product path={Hamburguer} />
          <Product path={Hamburguer} />
        </ScrollView>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: 5 }}
          horizontal
        >
          <Product path={Hamburguer} />
          <Product path={Hamburguer} />
          <Product path={Hamburguer} />
        </ScrollView>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: 5 }}
          horizontal
        >
          <Product path={Hamburguer} />
          <Product path={Hamburguer} />
          <Product path={Hamburguer} />
        </ScrollView>
      </ScrollView>
    </Container>
  );
};

export default Home;
