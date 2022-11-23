import React, { useState, useEffect } from 'react';
import { gql } from '@apollo/client';
import client from '../apollo-client';
import DealsCard from '../components/DealsCard';

const Games = () => {
  const [deals, setDeals] = useState(null);

  useEffect(() => {
    const query = gql`
      query GetGames {
        game @rest(type: "Game", path: "deals") {
          internalName,
          title,
          metacriticlink,
          dealID,
          storeID,
          gameID,
          salePrice,
          normalPrice,
          isOnSale,
          savings,
          metacriticScore,
          steamRatingText,
          steamRatingPercent,
          steamRatingCount,
          steamAppID,
          releaseDate,
          lastChange,
          dealRating,
          thumb
        }
      }
    `;

    client.query({ query })
      .then(response => {
        console.log('first fetch', response.data.game);
        const deals = [response.data.game];
        const newDeals = deals?.map((deal) => {
          const query = gql`
            query GetGame {
              game(id: deal.gameID) @rest(type: "Game", path: "games?id={args.id}") {
                info,
                cheapestPriceEver,
                deals
              }
            }
          `;
          client.query({ query })
            .then((response) => {
              console.log("indi game", response);
            })
            .catch((err) => console.log('err', err));
        })
        
        setDeals([...response.data.game]);
      })
      .catch((err) => console.log('err', err));
  }, []);
  
  // map over deals array and render cards
  const mappedDeals = deals?.map((deal) => {
    return (
      <DealsCard 
        key={deal.dealID}
        id={deal.gameID}
        title={deal.title}
        normalPrice={deal.normalPrice}
        metacriticScore={deal.metacriticScore}
        thumb={deal.thumb}
      />
    )
  })
  

  return (
    <div className="flex gap-5 flex-wrap justify-center items-center p-5">
      {mappedDeals}
    </div>
  )
}

export default Games;