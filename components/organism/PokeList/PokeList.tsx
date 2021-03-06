import React from 'react';
import { PokeCard } from '../../molecules/PokeCard';
import { Loading } from './style';
import { Row, Col } from 'antd';
import { IPokemon } from '../../../types';
import {
  blueBackgroundColor,
  waterGreenBackgroundColor,
  lightGreenBackgroundColor,
  yellowBackgroundColor,
  orangeBackgroundColor,
  purpleBackgroundColor,
  darkPinkBackgroundColor,
  pinkBackgroundColor,
  redBackgroundColor,
} from '../../../helpers/colors';

const colors = [
  blueBackgroundColor,
  waterGreenBackgroundColor,
  lightGreenBackgroundColor,
  yellowBackgroundColor,
  orangeBackgroundColor,
  purpleBackgroundColor,
  darkPinkBackgroundColor,
  pinkBackgroundColor,
  redBackgroundColor
];
const newArrColors = [];

for (var i = 0; i < 999; i++) {
  for (var j = 0; j < colors.length; j++) {
    newArrColors.push(colors[j]);
  }
}

//independente da quantidade de vezes que esse componente for chamando, desta forma será declarado uma única vez.
const handlePokemonsArray = (PokemonsArray: IPokemon[] | null) => {
  if (PokemonsArray?.length > 0) {
    return PokemonsArray.map((pokemon: IPokemon, index: number) => {
      return (
        <Col className="gutter-row" span={6} key={index}>
          <PokeCard pokemon={pokemon} background={newArrColors[index]} key={index} />
        </Col>
      );
    });
  } else {
    return <Loading>Carregando ...</Loading>;
  }
}

export const PokeList = ({PokemonsArray}) => {
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
        {handlePokemonsArray(PokemonsArray)}
      </Row>
    </>
  );
}
