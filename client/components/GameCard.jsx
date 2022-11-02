import React from "react";

export const GameCard = (props) => {

  const gameName = 'Rimworld';
  const gameGenres = ['GG1', 'GG2', 'GG3'];
  const gameImg = "https://cdn.akamai.steamstatic.com/steam/apps/294100/header.jpg?t=1666905455";
  const priceOfGame = "$21.99";


  return (
    <div className="card w-96 bg-stone-200 shadow-xl m-4">
      <figure><img src={gameImg} alt={gameName} /></figure>
      <div className="card-body">
        <div className="game-details flex">
          <h2 className="card-title">
            {gameName}
            <div className="badge badge-accent">SALE</div>
          </h2>
          <p className="price-of-game text-align-right">{priceOfGame}</p>
        </div>

        <div className="card-actions flex-col items-start">
          <button className="btn">Check out</button>
          <h5 className="mb-0">Genres</h5>
          <div className="genre-tags flex">
            {gameGenres.map(element => {
              return (
                <div className="badge badge-outline mx-1">{element}</div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};