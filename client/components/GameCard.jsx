import React from "react";

export const GameCard = (props) => {


  //Variables for quick change of values in cards
  const gameName = props.name;
  //Game Genres Array. Will be sliced to display the first 2.
  const gameGenres = props.genres;
  const gameImg = props.image;
  const priceOfGame = props.price;
  const isSale = props.isSale;


  return (
    <div data-theme='dark' className="card w-80 shadow-xl m-2">
      <figure><img className="w-full" src={gameImg} alt={gameName} /></figure>
      <div className="card-body flex flex-col">
        <div className="game-details flex">
          <div className="title-section">
            <h2 className="card-title text-xl flex items-start max-w-10/12 max-h-14 overflow-hidden">
              {gameName}
            </h2>

          {/* If the game is on sale somewhere, show sale badge, otherwise place invisible badge */}
          {isSale !== '0' ? <div className="badge badge-accent ">ON SALE</div> : <div className="badge badge-accent opacity-0">NOT ON SALE</div>}
          </div>
          {/* Lowest price of game */}
          <p className="price-of-game flex ml-2 justify-end">{priceOfGame}</p>
        </div>

        {/* <div className="flex flex-col">
          <p className="genre-title text-base">Genres: </p>
          <div className="genre-section flex flex-wrap"> */}
        {/*Slice genre array to display first two*/}
        {/* {gameGenres.slice(0,3).map((element, index) => {
              return (
                <div key={index} className="badge badge-outline badge-accent w-fit mr-1 my-1.5">{element}</div>
              );
            })} */}
        {/* A clickable badge to indicate there are more genres. Takes you to game page.  */}
        {/* {gameGenres.length > 2 && <span className="badge badge-outline badge-accent w-1/4">...</span>} */}
        {/* </div> */}

        {/* </div> */}
        <div className="card-actions h-full flex flex-col justify-end">
          <button className="btn btn-secondary w-full">Buy</button>
        </div>
      </div>

    </div>
  );
};