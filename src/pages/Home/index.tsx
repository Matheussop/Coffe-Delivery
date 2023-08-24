import {
  HomeContainer,
  IntroContainer, IntroImage, IntroTextContainer,
  SlugsContainer, Subtitle, Title
} from "./style";

import InfoImg from "../../assets/Info.png";
import { Slug } from "./Slug";
import { Coffee, ShoppingCart, Package, Timer } from "phosphor-react";

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
    </HomeContainer>
  )
}