import React from "react";

export const GameCard = (props) => {


  //Variables for quick change of values in cards
  const gameName = props.name
  //Game Genres Array. Will be sliced to display the first 2.
  const gameGenres = props.genres;
  const gameImg = props.image;
  const priceOfGame = props.price;
  const isSale = props.isSale;


  return (
    <div data-theme='dark' className="card w-96 shadow-xl m-4">
      <figure><img src={gameImg} alt={gameName} /></figure>
      <div className="card-body">
        <div className="game-details flex">
          <h2 className="card-title text-xl flex flex-wrap w-1/2">
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
            {gameGenres.slice(0,5).map((element, index) => {
              return (
                <div key={index} className="badge badge-outline badge-accent w-fit mr-1">{element}</div>
              );
            })}
            {/* A clickable badge to indicate there are more genres. Takes you to game page.  */}
            {gameGenres.length > 2 && <span className="badge badge-outline badge-accent w-1/4">...</span>}
          </div>

          <div className="card-actions flex-col justify-start items-end w-2/5 ">
            <button className="btn btn-secondary w-1/2">Buy</button>
          </div>
        </div>
      </div>

    </div>
  );
};