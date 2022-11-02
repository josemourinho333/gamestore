import React from "react";

export const GameCard = (props) => {


  //Variables for quick change of values in cards
  const gameName = 'Rimworld';
  //Game Genres Array. Will be sliced to display the first 2.
  const gameGenres = ['GG1', 'GG2', 'GG3','GG1', 'GG2', 'GG3'];
  const gameImg = "https://cdn.akamai.steamstatic.com/steam/apps/294100/header.jpg?t=1666905455";
  const priceOfGame = "$21.99";
  const isSale = true


  return (
    <div data-theme='dark' className="card w-96  shadow-xl m-4">
      <figure><img src={gameImg} alt={gameName} /></figure>
      <div className="card-body">
        <div className="game-details flex">
          <h2 className="card-title text-xl">
            {gameName}
            {/* If the game is on sale somewhere, show this badge */}
            {isSale && <div className="badge badge-accent">ON SALE</div>}
            
          </h2>
          {/* Lowest price of game */}
          <p className="price-of-game flex justify-end">{priceOfGame}</p>
        </div>

        <div className="flex">
          <div className="genre-tags flex-col w-3/5">
            <p className="text-base">Genres</p>
            {/*Slice genre array to display first two*/}
            {gameGenres.slice(0,2).map(element => {
              return (
                <div className="badge badge-outline badge-accent w-1/4 mr-1">{element}</div>
              );
            })}
            {/* A clickable badge to indicate there are more genres. Takes you to game page.  */}
            {gameGenres.length > 2 && <span className="badge badge-outline badge-accent w-1/4">...</span>}
          </div>

          <div className="card-actions flex-col justify-end items-end w-2/5 ">
            <button className="btn btn-secondary w-1/2">Buy</button>
          </div>
        </div>
      </div>

    </div>
  );
};