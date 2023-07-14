import React from 'react';
import {Container, CardSet, CardSetItem, CardSetLink, Card} from './Goods.styled'

export const Goods = () => {
  return (
    <Container>
      <CardSet>
        <CardSetItem>
          <CardSetLink href="./goods">
            <Card>
              {/* Вміст карточки товару */}
            </Card>
          </CardSetLink>
        </CardSetItem>
        {/* Додайте решту карточок товарів */}
      </CardSet>
    </Container>
    
  );
}
