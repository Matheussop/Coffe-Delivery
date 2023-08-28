import {
  CoffeesContainer,
  ContentContainer,
  HomeContainer,
  IntroContainer, IntroImage, IntroTextContainer,
  SlugsContainer, Subtitle, Title, TitleContent
} from "./style";
import { Coffee, ShoppingCart, Package, Timer } from "phosphor-react";

import InfoImg from "../../assets/Info.png";
import { Slug } from "./components/Slug";
import { CoffeeItemProps } from "./components/CoffeItem";
import { CoffeeItem } from "./components/CoffeItem";
import { CoffeeData } from "./CoffeesData";

const Items: CoffeeItemProps[] = CoffeeData

export function Home() {

  return (
    <HomeContainer>
      <IntroContainer>
        <IntroTextContainer>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>Com o Coffee Delivery você recebe seu café onde estiver,
            a qualquer hora</Subtitle>
          <SlugsContainer>
            <Slug color="yellow-dark" 
              text="Compra simples e segura" 
              icon={<ShoppingCart weight="fill" />} />
            <Slug color="base-text" 
              text="Embalagem mantém o café intacto" 
              icon={<Package weight="fill" />} />
            <Slug color="yellow" 
              text="Entrega rápida e rastreada" 
              icon={<Coffee weight="fill" />} />
            <Slug color="purple" 
              text="O café chega fresquinho até você" 
              icon={<Timer weight="fill" />} />
          </SlugsContainer>
        </IntroTextContainer>
        <IntroImage>
          <img src={InfoImg} alt="Imagem de um copo de café" width='100%'/>
        </IntroImage>
      </IntroContainer>
      <ContentContainer>
        <TitleContent>Nossos cafés</TitleContent>
        <CoffeesContainer>
          {
            Items.map(item  => (
              <CoffeeItem key={item.name} {...item} />
            ))
          }
        </CoffeesContainer>
      </ContentContainer>
    </HomeContainer>
  )
}