import React from 'react';
import { gql } from '@apollo/client';
import client from '../apollo-client';

const Games = () => {
  const query = gql`
    query GetGames {
      game @rest(type: "Game", path: "deals") {
        gameID,
        steamAppID,
        cheapest,
        cheapestDealID,
        external,
        thumb
      }
    }
  `;

  client.query({ query })
    .then(response => {
      console.log('first fetch', response);
    })
    .catch((err) => console.log('err', err));

  return (
    <div>Games all</div>
  )
}

export default Games;